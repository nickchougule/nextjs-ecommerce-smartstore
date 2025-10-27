import fs from "fs";
import path from "path";
import ProductCard from "../components/ProductCard";

export const revalidate = false;

export default async function Home() {
  const filePath = path.join(process.cwd(), "data/products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="fw-bold text-gradient">Welcome to SmartStore 🛍️</h1>
        <p className="text-muted fs-5">
          Discover the latest products, best prices, and smooth experience.
        </p>
      </section>

      <div className="row g-4 justify-content-center">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
