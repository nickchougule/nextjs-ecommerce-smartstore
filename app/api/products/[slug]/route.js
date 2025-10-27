import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data/products.json");

export async function GET(request, { params }) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const product = data.find((p) => p.slug === params.slug);
  return NextResponse.json(product || {});
}

export async function PUT(request, { params }) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== "admin123") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updated = await request.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const index = data.findIndex((p) => p.slug === params.slug);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  data[index] = { ...data[index], ...updated, lastUpdated: new Date().toISOString() };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true });
}
