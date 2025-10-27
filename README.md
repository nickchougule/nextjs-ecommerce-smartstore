# 🛍️ Next.js E-Commerce Application

**Author:** Nikhil Chougule  
**Date:** October 2025  

This project is a mini full-stack **E-Commerce Web Application** built using **Next.js (JavaScript)** and **Bootstrap**.  
It demonstrates different **rendering methods** (SSG, ISR, SSR, CSR) along with backend API routes and a simple JSON database.

---

## 🚀 Features

- Product catalog with static generation (SSG)
- Product detail pages with incremental regeneration (ISR)
- Live inventory dashboard with server-side rendering (SSR)
- Admin panel for product management (CSR)
- Mock backend API routes for CRUD operations
- Simple key-based API protection
- Bootstrap UI for responsive design

---

## 🧩 Rendering Strategies

| Page | Route | Rendering Type | Description |
|------|--------|----------------|--------------|
| **Home** | `/` | **SSG** | Displays product catalog using static generation |
| **Product Detail** | `/products/[slug]` | **ISR (60s)** | Auto-regenerates each product page every 60 seconds |
| **Dashboard** | `/dashboard` | **SSR** | Fetches live data (fresh on every request) |
| **Admin Panel** | `/admin` | **CSR** | Uses client-side rendering for dynamic interaction |

---

## ⚙️ API Endpoints

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/products` | GET | Fetch all products |
| `/api/products` | POST | Add a new product (requires `x-api-key`) |
| `/api/products/[slug]` | GET | Fetch single product |
| `/api/products/[slug]` | PUT | Update existing product (requires `x-api-key`) |

> 🔑 API Key: `admin123`

---

## 🧱 Data Model

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "description": "string",
  "price": "number",
  "category": "string",
  "inventory": "number",
  "lastUpdated": "ISO string"
}
