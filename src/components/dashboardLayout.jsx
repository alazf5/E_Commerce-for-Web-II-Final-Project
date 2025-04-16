import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Seller Panel</h1>
        <nav className="space-y-2">
          <Link to="/seller" className="block hover:text-gray-300">My Products</Link>
          <Link to="/seller/add" className="block hover:text-gray-300">Add Product</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
