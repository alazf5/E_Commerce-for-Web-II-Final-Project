import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		description: "",
		image: null,
		imagePreview: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData((prev) => ({
				...prev,
				image: file,
				imagePreview: URL.createObjectURL(file),
			}));
		}
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.price) newErrors.price = "Price is required";
		else if (formData.price <= 0) newErrors.price = "Price must be positive";
		if (!formData.description)
			newErrors.description = "Description is required";
		if (!formData.image) newErrors.image = "Image is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);

		// Simulate API call delay
		setTimeout(() => {
			const newProduct = {
				id: Date.now(),
				name: formData.name,
				price: parseFloat(formData.price),
				description: formData.description,
				image: formData.imagePreview, // In real app, upload to cloud storage
			};

			// Save to localStorage (mock database)
			const existingProducts = JSON.parse(
				localStorage.getItem("sellerProducts") || "[]"
			);
			localStorage.setItem(
				"sellerProducts",
				JSON.stringify([...existingProducts, newProduct])
			);

			setIsSubmitting(false);
			navigate("/seller"); // Redirect to seller dashboard
		}, 1000);
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-gray-500">
			<h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Image Upload */}
				<div>
					<label className="block font-medium text-gray-700 mb-1">
						Product Image
					</label>
					<div className="flex items-center space-x-4">
						{formData.imagePreview ? (
							<img
								src={formData.imagePreview}
								alt="Preview"
								className="h-20 w-20 object-cover rounded border"
							/>
						) : (
							<div className="h-20 w-20 bg-gray-200 rounded flex items-center justify-center">
								<span className="text-gray-500">No image</span>
							</div>
						)}
						<label className="cursor-pointer">
							<span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
								Choose Image
							</span>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className="hidden"
								required
							/>
						</label>
					</div>
					{errors.image && (
						<p className="mt-1 text-sm text-red-600">{errors.image}</p>
					)}
				</div>

				{/* Product Name */}
				<div>
					<label className="block font-medium text-gray-700 mb-1">
						Product Name
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={`w-full border ${
							errors.name ? "border-red-500" : "border-gray-300"
						} px-3 py-2 rounded`}
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-600">{errors.name}</p>
					)}
				</div>

				{/* Price */}
				<div>
					<label className="block font-medium text-gray-700 mb-1">
						Price ($)
					</label>
					<input
						type="number"
						name="price"
						min="0.01"
						step="0.01"
						value={formData.price}
						onChange={handleChange}
						className={`w-full border ${
							errors.price ? "border-red-500" : "border-gray-300"
						} px-3 py-2 rounded`}
					/>
					{errors.price && (
						<p className="mt-1 text-sm text-red-600">{errors.price}</p>
					)}
				</div>

				{/* Description */}
				<div>
					<label className="block font-medium text-gray-700 mb-1">
						Description
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						rows="3"
						className={`w-full border ${
							errors.description ? "border-red-500" : "border-gray-300"
						} px-3 py-2 rounded`}
					/>
					{errors.description && (
						<p className="mt-1 text-sm text-red-600">{errors.description}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
						isSubmitting ? "opacity-70 cursor-not-allowed" : ""
					}`}
				>
					{isSubmitting ? "Adding Product..." : "Add Product"}
				</button>
			</form>
		</div>
	);
}
