import fs from "fs";
import path from "path";
import Link from "next/link";

export const revalidate = 60;

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data/products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }) {
  const filePath = path.join(process.cwd(), "data/products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const product = data.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="container py-5 text-center">
        <h2 className="text-danger">Product not found</h2>
        <Link href="/" className="btn btn-secondary mt-3">Go Back</Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="card shadow border-0">
        <div className="card-body">
          <h1 className="card-title text-primary">{product.name}</h1>
          <p className="text-muted">{product.description}</p>

          <div className="row">
            <div className="col-md-6">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ₹{product.price}</p>
              <p><strong>Inventory:</strong> {product.inventory}</p>
            </div>
          </div>

          <Link href="/" className="btn btn-outline-dark mt-3">← Back to Products</Link>
        </div>
      </div>
    </main>
  );
}
