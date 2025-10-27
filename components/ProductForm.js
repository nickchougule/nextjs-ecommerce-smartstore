'use client';
import { useState } from "react";

export default function ProductForm({ onProductAdded }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    inventory: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "admin123",
      },
      body: JSON.stringify({
        ...form,
        slug: form.name.toLowerCase().replace(/\s+/g, "-"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert("✅ Product added successfully!");
      setForm({
        name: "",
        price: "",
        category: "",
        inventory: "",
        description: "",
      });
      onProductAdded();
    } else {
      alert("❌ Failed to add product!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. Electronics"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Inventory</label>
          <input
            type="number"
            name="inventory"
            value={form.inventory}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter short description"
            rows="2"
            required
          />
        </div>

        <div className="col-12 text-end mt-3">
          <button
            type="submit"
            className="btn btn-primary px-4 fw-bold"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </div>
    </form>
  );
}
