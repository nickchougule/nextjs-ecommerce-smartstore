'use client';
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card h-100 shadow glass-card">
        <div className="card-body text-center p-4">
          <h5 className="fw-bold mb-2 text-dark">{product.name}</h5>
          <p className="text-muted small mb-3">{product.description}</p>
          <p className="text-primary fw-bold fs-5">₹{product.price}</p>
          <Link href={`/products/${product.slug}`} className="btn btn-primary">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
