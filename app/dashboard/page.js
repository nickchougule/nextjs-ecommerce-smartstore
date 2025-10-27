import fs from "fs";
import path from "path";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const filePath = path.join(process.cwd(), "data/products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const totalProducts = data.length;
  const lowStock = data.filter((p) => p.inventory < 10).length;

  return (
    <main className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-primary">Inventory Dashboard</h1>
        <Link href="/admin" className="btn btn-outline-dark">
          Go to Admin Panel
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <h5 className="text-secondary">Total Products</h5>
              <h2 className="fw-bold text-success">{totalProducts}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <h5 className="text-secondary">Low Stock (&lt; 10)</h5>
              <h2 className="fw-bold text-danger">{lowStock}</h2>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mb-3">Product Inventory</h4>
      <div className="table-responsive">
        <table className="table table-striped align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price (₹)</th>
              <th scope="col">Inventory</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td>{p.inventory}</td>
                <td>
                  {p.inventory < 10 ? (
                    <span className="badge bg-danger">Low</span>
                  ) : (
                    <span className="badge bg-success">In Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
