import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data/products.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return NextResponse.json(data);
}

export async function POST(request) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== "admin123") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const newProduct = await request.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  data.push({
    ...newProduct,
    id: String(data.length + 1),
    lastUpdated: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true });
}
