'use client';
import { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="d-flex">
      <AdminSidebar />

      <main className="flex-grow-1 p-4" style={{ marginLeft: '220px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold text-primary">Manage Products</h1>
          <button onClick={fetchProducts} className="btn btn-outline-primary">
            Refresh 🔄
          </button>
        </div>

        {/* Add New Product Section */}
        <div className="card shadow-sm border-0 mb-5" id="addProduct">
          <div className="card-body">
            <h4 className="mb-3 text-secondary fw-bold">➕ Add New Product</h4>
            <ProductForm onProductAdded={fetchProducts} />
          </div>
        </div>

        {/* Product Table */}
        <h4 className="fw-bold mb-3">📦 Product Inventory</h4>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary"></div>
            <p className="mt-3">Loading products...</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price (₹)</th>
                  <th>Stock</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.id}>
                    <td>{i + 1}</td>
                    <td className="fw-semibold">{p.name}</td>
                    <td>{p.category}</td>
                    <td className="text-success fw-bold">{p.price}</td>
                    <td>
                      <span
                        className={`badge ${p.inventory < 10 ? 'bg-danger' : 'bg-success'}`}
                      >
                        {p.inventory < 10 ? 'Low' : p.inventory}
                      </span>
                    </td>
                    <td>{new Date(p.lastUpdated).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
