// import React from "react";
// const products = [
// 	{
// 		id: 1,
// 		name: "Earthen Bottle",
// 		href: "#",
// 		price: "$48",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
// 		imageAlt:
// 			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
// 	},
// 	{
// 		id: 2,
// 		name: "Nomad Tumbler",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
// 		imageAlt:
// 			"Olive drab green insulated bottle with flared screw lid and flat top.",
// 	},
// 	{
// 		id: 3,
// 		name: "Focus Paper Refill",
// 		href: "#",
// 		price: "$89",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
// 		imageAlt:
// 			"Person using a pen to cross a task off a productivity paper card.",
// 	},
// 	{
// 		id: 4,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 5,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 6,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 7,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 8,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 9,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 10,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 11,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 12,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 13,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 14,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 15,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 16,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 17,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 18,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 19,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// 	{
// 		id: 20,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: "$35",
// 		imageSrc:
// 			"https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		imageAlt:
// 			"Hand holding black machined steel mechanical pencil with brass tip and top.",
// 	},
// ];

// export default function Home() {
// 	return (
// 		<div className="bg-white">
// 			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// 				<h2 className="sr-only">Products</h2>

// 				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
// 					{products.map((product) => (
// 						<a key={product.id} href={product.href} className="group">
// 							<img
// 								alt={product.imageAlt}
// 								src={product.imageSrc}
// 								className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
// 							/>
// 							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
// 							<p className="mt-1 text-lg font-medium text-gray-900">
// 								{product.price}
// 							</p>
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      try {
        const storedProducts = JSON.parse(localStorage.getItem('sellerProducts') || "[]");
        setProducts(storedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
      }
      setLoading(false);
    };

    loadProducts();
    window.addEventListener('storage', loadProducts);
    return () => window.removeEventListener('storage', loadProducts);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No products available yet</p>
            <Link
              to="/seller/add"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Product
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                {product.image ? (
                  <img
                    alt={product.name}
                    src={product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                ) : (
                  <div className="aspect-square w-full rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}