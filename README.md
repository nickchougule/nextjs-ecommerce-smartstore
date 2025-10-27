# 🛍️ SmartStore – Next.js E-Commerce Application (Final Version)

**Author:** Nikhil Chougule  
**Date:** October 2025  

---

## 🌐 Live Demo

🚀 **SmartStore is Live!**  
👉 [https://nextjs-ecommerce-smartstore.vercel.app](https://nextjs-ecommerce-smartstore.vercel.app)

> Hosted on **Vercel** using Next.js App Router with ISR, SSR, CSR & API Routes.

---

## 💾 GitHub Repository

👉 [https://github.com/nikhilchougule/nextjs-ecommerce-smartstore](https://github.com/nikhilchougule/nextjs-ecommerce-smartstore)

---

## 📘 Project Overview

This project is a mini full-stack **E-Commerce Web Application** built using **Next.js (JavaScript)** and **Bootstrap 5**.  
It demonstrates different **rendering methods** — **SSG, ISR, SSR, and CSR** — along with backend API routes, a simple JSON database, and a polished modern UI.

---

## 🚀 Features

- 🏠 Product catalog with **Static Site Generation (SSG)**
- 🧾 Product detail pages with **Incremental Static Regeneration (ISR, 60s)**
- 📊 Live inventory dashboard using **Server-Side Rendering (SSR)**
- ⚙️ Admin panel with **Client-Side Rendering (CSR)** for product management
- 🧠 Mock backend with **Next.js API routes** for CRUD operations
- 🔐 Key-based admin protection (`x-api-key`)
- 💎 Responsive UI using **Bootstrap 5** and custom gradients
- 🎨 Clean, modern layout with reusable components (Navbar, Footer, Sidebar)

---

## 🧩 Rendering Strategies

| Page | Route | Rendering Type | Description |
|------|--------|----------------|--------------|
| **Home** | `/` | **SSG** | Displays product catalog using static generation |
| **Product Detail** | `/products/[slug]` | **ISR (60s)** | Auto-regenerates product details every 60 seconds |
| **Dashboard** | `/dashboard` | **SSR** | Live inventory stats fetched on every request |
| **Admin Panel** | `/admin` | **CSR** | Manage products dynamically using client-side fetch |

---

## ⚙️ API Endpoints

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/products` | **GET** | Fetch all products |
| `/api/products` | **POST** | Add a new product *(requires `x-api-key`)* |
| `/api/products/[slug]` | **GET** | Fetch a single product |
| `/api/products/[slug]` | **PUT** | Update a product *(requires `x-api-key`)* |

> 🔑 **API Key:** `admin123`

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
