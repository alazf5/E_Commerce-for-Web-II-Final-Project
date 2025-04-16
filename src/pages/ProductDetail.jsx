// import React from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import {
// 	ShoppingBagIcon,
// 	TruckIcon,
// 	CurrencyDollarIcon,
// } from "@heroicons/react/24/outline";

// const ProductDetail = () => {
// 	const product = {
// 		name: "Basic Tee",
// 		price: "$35",
// 		rating: 3.9,
// 		reviewCount: 512,
// 		colors: [
// 			{ name: "Black", class: "bg-gray-900" },
// 			{ name: "Heather Grey", class: "bg-gray-400" },
// 		],
// 		sizes: ["XS", "S", "M", "L", "XL"],
// 		description: `
//       The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton 
//       for true comfort and a dependable fit. They are hand cut and sewn locally, with a special 
//       dye technique that gives each tee it's own look.
//     `,
// 		features: [
// 			"Only the best materials",
// 			"Ethically and locally made",
// 			"Pre-washed and pre-shrunk",
// 			"Machine wash cold with similar colors",
// 		],
// 		policies: [
// 			{
// 				name: "International delivery",
// 				description: "Get your order in 2 years",
// 				icon: TruckIcon,
// 			},
// 			{
// 				name: "Loyalty rewards",
// 				description: "Don't look at other tees",
// 				icon: CurrencyDollarIcon,
// 			},
// 		],
// 		images: [
// 			{
// 				id: 1,
// 				name: "Back view",
// 				src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
// 				alt: "Back of women's Basic Tee in black.",
// 			},
// 			// Add other images
// 		],
// 		reviews: {
// 			average: 3.9,
// 			totalCount: 512,
// 			featured: [
// 				{
// 					id: 1,
// 					title: "Can't say enough good things",
// 					rating: 5,
// 					content: `
//             I was really pleased with the overall shopping experience. My order even included a little personal, 
//             handwritten note, which delighted me! The product quality is amazing, it looks and feel even better 
//             than I had anticipated. Brilliant stuff!
//           `,
// 					author: "Risako M",
// 					date: "May 16, 2021",
// 				},
// 				// Add other reviews
// 			],
// 		},
// 		relatedProducts: [
// 			{
// 				id: 1,
// 				name: "Basic Tee",
// 				color: "Aspen White",
// 				price: "$35",
// 				href: "#",
// 				imageSrc:
// 					"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
// 				imageAlt: "Front of men's Basic Tee in white.",
// 			},
// 			// Add other related products
// 		],
// 	};

// 	return (
// 		<main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
// 			{/* Product section */}
// 			<div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
// 				{/* Product images */}
// 				<div className="mt-10 lg:mt-0 text-gray-500">
// 					<h2 className="sr-only">Images</h2>
// 					<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8">
// 						{product.images.map((image) => (
// 							<div
// 								key={image.id}
// 								className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"
// 							>
// 								<img
// 									src={image.src}
// 									alt={image.alt}
// 									className="h-full w-full object-cover object-center"
// 								/>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				{/* Product info */}
// 				<div className="lg:pt-8">
// 					<div className="mb-8">
// 						<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
// 							{product.name}
// 						</h1>
// 						<p className="text-2xl text-gray-900 mt-2">{product.price}</p>
// 					</div>

// 					{/* Reviews */}
// 					<div className="mt-4">
// 						<h2 className="sr-only">Reviews</h2>
// 						<div className="flex items-center">
// 							<p className="text-sm text-gray-700">
// 								{product.rating}
// 								<span className="sr-only"> out of 5 stars</span>
// 							</p>
// 							<div className="ml-1 flex items-center">
// 								{[0, 1, 2, 3, 4].map((rating) => (
// 									<StarIcon
// 										key={rating}
// 										className={`h-5 w-5 flex-shrink-0 ${
// 											rating < product.rating
// 												? "text-yellow-400"
// 												: "text-gray-200"
// 										}`}
// 										aria-hidden="true"
// 									/>
// 								))}
// 							</div>
// 							<div aria-hidden="true" className="ml-4 text-sm text-gray-300">
// 								·
// 							</div>
// 							<a
// 								href="#"
// 								className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
// 							>
// 								See all {product.reviewCount} reviews
// 							</a>
// 						</div>
// 					</div>

// 					{/* Color selector */}
// 					<div className="mt-8">
// 						<h2 className="text-sm font-medium text-gray-900">Color</h2>
// 						<fieldset className="mt-2">
// 							<legend className="sr-only">Choose a color</legend>
// 							<div className="flex items-center space-x-3">
// 								{product.colors.map((color) => (
// 									<label key={color.name} className="flex items-center">
// 										<input
// 											type="radio"
// 											name="color-choice"
// 											value={color.name}
// 											className="sr-only"
// 										/>
// 										<span
// 											aria-hidden="true"
// 											className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${color.class}`}
// 										/>
// 										<span className="sr-only">{color.name}</span>
// 									</label>
// 								))}
// 							</div>
// 						</fieldset>
// 					</div>

// 					{/* Size selector */}
// 					<div className="mt-8">
// 						<div className="flex items-center justify-between">
// 							<h2 className="text-sm font-medium text-gray-900">Size</h2>
// 							<a
// 								href="#"
// 								className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
// 							>
// 								See sizing chart
// 							</a>
// 						</div>
// 						<fieldset className="mt-2">
// 							<legend className="sr-only">Choose a size</legend>
// 							<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
// 								{product.sizes.map((size) => (
// 									<label
// 										key={size}
// 										className="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase text-gray-500 hover:bg-blue-600 hover:text-white focus:outline-none sm:flex-1"
// 									>
// 										<input
// 											type="radio"
// 											name="size-choice"
// 											value={size}
// 											className="sr-only"
// 										/>
// 										<span>{size}</span>
// 									</label>
// 								))}
// 							</div>
// 						</fieldset>
// 					</div>

// 					{/* Add to cart */}
// 					<button
// 						type="submit"
// 						className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// 					>
// 						Add to cart
// 					</button>

// 					{/* Product description */}
// 					<div className="mt-10">
// 						<h2 className="text-sm font-medium text-gray-900">Description</h2>
// 						<div className="prose prose-sm mt-4 text-gray-500">
// 							<p>{product.description}</p>
// 						</div>
// 					</div>

// 					{/* Fabric & care */}
// 					<div className="mt-8 border-t border-gray-200 pt-8">
// 						<h2 className="text-sm font-medium text-gray-900">Fabric & Care</h2>
// 						<div className="prose prose-sm mt-4 text-gray-500">
// 							<ul role="list">
// 								{product.features.map((item) => (
// 									<li key={item}>{item}</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>

// 					{/* Policies */}
// 					<section aria-labelledby="policies-heading" className="mt-10">
// 						<h2 id="policies-heading" className="sr-only">
// 							Our Policies
// 						</h2>
// 						<dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
// 							{product.policies.map((policy) => (
// 								<div
// 									key={policy.name}
// 									className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
// 								>
// 									<dt>
// 										<policy.icon
// 											className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
// 											aria-hidden="true"
// 										/>
// 										<span className="mt-4 text-sm font-medium text-gray-900">
// 											{policy.name}
// 										</span>
// 									</dt>
// 									<dd className="mt-1 text-sm text-gray-500">
// 										{policy.description}
// 									</dd>
// 								</div>
// 							))}
// 						</dl>
// 					</section>
// 				</div>
// 			</div>

// 			{/* Reviews section */}
// 			<section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
// 				<h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
// 					Recent reviews
// 				</h2>
// 				<div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
// 					{product.reviews.featured.map((review) => (
// 						<div
// 							key={review.id}
// 							className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
// 						>
// 							<div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
// 								<div className="flex items-center xl:col-span-1">
// 									<div className="flex items-center">
// 										{[0, 1, 2, 3, 4].map((rating) => (
// 											<StarIcon
// 												key={rating}
// 												className={classNames(
// 													review.rating > rating
// 														? "text-yellow-400"
// 														: "text-gray-200",
// 													"h-5 w-5 flex-shrink-0"
// 												)}
// 												aria-hidden="true"
// 											/>
// 										))}
// 									</div>
// 									<p className="ml-3 text-sm text-gray-700">
// 										{review.rating}
// 										<span className="sr-only"> out of 5 stars</span>
// 									</p>
// 								</div>
// 								<div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
// 									<h3 className="text-sm font-medium text-gray-900">
// 										{review.title}
// 									</h3>
// 									<div className="mt-3 space-y-6 text-sm text-gray-500">
// 										<p>{review.content}</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
// 								<p className="font-medium text-gray-900">{review.author}</p>
// 								<time
// 									dateTime={review.datetime}
// 									className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
// 								>
// 									{review.date}
// 								</time>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</section>

// 			{/* Related products */}
// 			<section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
// 				<h2 id="related-heading" className="text-lg font-medium text-gray-900">
// 					Customers also purchased
// 				</h2>
// 				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
// 					{product.relatedProducts.map((relatedProduct) => (
// 						<div key={relatedProduct.id} className="group relative">
// 							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
// 								<img
// 									src={relatedProduct.imageSrc}
// 									alt={relatedProduct.imageAlt}
// 									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
// 								/>
// 							</div>
// 							<div className="mt-4 flex justify-between">
// 								<div>
// 									<h3 className="text-sm text-gray-700">
// 										<a href={relatedProduct.href}>
// 											<span aria-hidden="true" className="absolute inset-0" />
// 											{relatedProduct.name}
// 										</a>
// 									</h3>
// 									<p className="mt-1 text-sm text-gray-500">
// 										{relatedProduct.color}
// 									</p>
// 								</div>
// 								<p className="text-sm font-medium text-gray-900">
// 									{relatedProduct.price}
// 								</p>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 		</main>
// 	);
// };

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(" ");
// }

// export default ProductDetail;



import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { StarIcon, ShoppingBagIcon, TruckIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const loadProduct = () => {
      try {
        const storedProducts = JSON.parse(localStorage.getItem('sellerProducts') || "[]");
        const foundProduct = storedProducts.find(p => p.id === Number(id));
        
        if (foundProduct) {
          setProduct({
            ...foundProduct,
            // Add default values for any missing fields
            colors: foundProduct.colors || [
              { name: "Black", class: "bg-gray-900" },
              { name: "White", class: "bg-gray-100" }
            ],
            sizes: foundProduct.sizes || ["XS", "S", "M", "L", "XL"],
            features: foundProduct.features || [
              "High quality material",
              "Ethically made",
              "Machine washable"
            ],
            policies: foundProduct.policies || [
              {
                name: "Fast delivery",
                description: "Get your order in 2-3 business days",
                icon: TruckIcon
              },
              {
                name: "Quality guarantee",
                description: "30-day return policy",
                icon: CurrencyDollarIcon
              }
            ]
          });
        }
      } catch (error) {
        console.error("Failed to load product:", error);
      }
      setLoading(false);
    };

    loadProduct();
    window.addEventListener('storage', loadProduct);
    return () => window.removeEventListener('storage', loadProduct);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || "[]");
    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1
    };
    localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));
    // You might want to add a toast notification here
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product image */}
        <div className="mt-10 lg:mt-0">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="lg:pt-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-900 mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Color selector */}
          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Color</h2>
            <div className="flex items-center space-x-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-8 w-8 rounded-full border ${color.class} ${
                    selectedColor === color.name ? 'ring-2 ring-offset-2 ring-indigo-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Size</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase ${
                    selectedSize === size
                      ? 'bg-indigo-600 text-white border-transparent'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>

          {/* Product description */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <div className="mt-4 text-gray-500">
              <p>{product.description || 'No description available.'}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">Features</h2>
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="mt-10">
            <h2 className="sr-only">Policies</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {product.policies.map((policy) => (
                <div
                  key={policy.name}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                >
                  <policy.icon className="mx-auto h-6 w-6 text-gray-400" />
                  <h3 className="mt-4 text-sm font-medium text-gray-900">
                    {policy.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}