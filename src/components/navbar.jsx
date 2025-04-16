// import React, { useState } from "react";

// function NavBar() {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// 	const toggleMobileMenu = () => {
// 		setIsMobileMenuOpen((prev) => !prev);
// 	};

// 	return (
// 		<header className="bg-gray-900 text-white w-full sticky top-0 z-10">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="flex justify-between items-center h-16">
// 					{/* Logo */}
// 					<a href="#" className="text-3xl font-bold font-sans">
// 						Logo Here.
// 					</a>

// 					{/* Desktop Navigation */}
// 					<nav className="hidden md:flex space-x-8 text-lg">
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							Home
// 						</a>
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							Category
// 						</a>
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							Collections
// 						</a>
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							Contact Us
// 						</a>
// 					</nav>

// 					{/* Desktop Icons */}
// 					<div className="hidden md:flex items-center space-x-4 text-xl">
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							❤️
// 						</a>
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							🛒
// 						</a>
// 						<a href="#" className="hover:text-gray-300 transition-colors">
// 							👤
// 						</a>
// 					</div>

// 					{/* Mobile Menu Button */}
// 					<button
// 						onClick={toggleMobileMenu}
// 						className="md:hidden text-2xl focus:outline-none"
// 						aria-label="Toggle menu"
// 					>
// 						☰
// 					</button>
// 				</div>

// 				{/* Mobile Menu */}
// 				{isMobileMenuOpen && (
// 					<div className="md:hidden px-4 pb-4 space-y-3 text-lg bg-gray-800">
// 						<a
// 							href="#"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Home
// 						</a>
// 						<a
// 							href="#"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Category
// 						</a>
// 						<a
// 							href="#"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Collections
// 						</a>
// 						<a
// 							href="#"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Contact Us
// 						</a>
// 						<div className="flex space-x-4 pt-2 text-xl">
// 							<a href="#" className="hover:text-gray-300 transition-colors">
// 								❤️
// 							</a>
// 							<a href="#" className="hover:text-gray-300 transition-colors">
// 								🛒
// 							</a>
// 							<a href="#" className="hover:text-gray-300 transition-colors">
// 								👤
// 							</a>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</header>
// 	);
// }

// export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link

// function NavBar() {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// 	const toggleMobileMenu = () => {
// 		setIsMobileMenuOpen((prev) => !prev);
// 	};

// 	return (
// 		<header className="bg-gray-900 text-white w-full sticky top-0 z-10">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="flex justify-between items-center h-16">
// 					{/* Logo */}
// 					<Link to="/" className="text-3xl font-bold font-sans">
// 						Logo Here.
// 					</Link>

// 					{/* Desktop Navigation */}
// 					<nav className="hidden md:flex space-x-8 text-lg">
// 						<Link to="/" className="hover:text-gray-300 transition-colors">
// 							Home
// 						</Link>
// 						<Link
// 							to="/Product"
// 							className="hover:text-gray-300 transition-colors"
// 						>
// 							Category
// 						</Link>
// 						<Link
// 							to="/Product"
// 							className="hover:text-gray-300 transition-colors"
// 						>
// 							Collections
// 						</Link>
// 						<Link
// 							to="/contact"
// 							className="hover:text-gray-300 transition-colors"
// 						>
// 							Contact Us
// 						</Link>
// 						<Link to="/seller" className="hover:text-gray-300">
// 							Seller Dashboard
// 						</Link>
// 						<Link to="/admin" className="hover:text-gray-300">
// 							Admin Dashboard
// 						</Link>
// 					</nav>

// 					{/* Desktop Icons */}
// 					<div className="hidden md:flex items-center space-x-4 text-xl">
// 						<Link
// 							to="/favorites"
// 							className="hover:text-gray-300 transition-colors"
// 						>
// 							❤️
// 						</Link>
// 						<Link to="/cart" className="hover:text-gray-300 transition-colors">
// 							🛒
// 						</Link>
// 						<Link
// 							to="/account"
// 							className="hover:text-gray-300 transition-colors"
// 						>
// 							👤
// 						</Link>
// 					</div>

// 					{/* Mobile Menu Button */}
// 					<button
// 						onClick={toggleMobileMenu}
// 						className="md:hidden text-2xl focus:outline-none"
// 						aria-label="Toggle menu"
// 					>
// 						☰
// 					</button>
// 				</div>

// 				{/* Mobile Menu */}
// 				{isMobileMenuOpen && (
// 					<div className="md:hidden px-4 pb-4 space-y-3 text-lg bg-gray-800">
// 						<Link
// 							to="/"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Home
// 						</Link>
// 						<Link
// 							to="/Product"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Category
// 						</Link>
// 						<Link
// 							to="/Product"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Collections
// 						</Link>
// 						<Link
// 							to="/contact"
// 							className="block hover:text-gray-300 py-2 transition-colors"
// 						>
// 							Contact Us
// 						</Link>
// 						<Link to="/seller" className="hover:text-gray-300">
// 							Seller Dashboard
// 						</Link>
// 						<Link to="/admin" className="hover:text-gray-300">
// 							Admin Dashboard
// 						</Link>
// 						<div className="flex space-x-4 pt-2 text-xl">
// 							<Link
// 								to="/favorites"
// 								className="hover:text-gray-300 transition-colors"
// 							>
// 								❤️
// 							</Link>
// 							<Link
// 								to="/cart"
// 								className="hover:text-gray-300 transition-colors"
// 							>
// 								🛒
// 							</Link>
// 							<Link
// 								to="/account"
// 								className="hover:text-gray-300 transition-colors"
// 							>
// 								👤
// 							</Link>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</header>
// 	);
// }

// export default NavBar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useUser } from "../Context/UserContext"; // ✅ Use consistent lowercase 'context'

// function NavBar() {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const { user, logout } = useUser();

// 	const toggleMobileMenu = () => {
// 		setIsMobileMenuOpen((prev) => !prev);
// 	};

// 	return (
// 		<header className="bg-gray-900 text-white w-full sticky top-0 z-10">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="flex justify-between items-center h-16">
// 					{/* Logo */}
// 					<Link to="/" className="text-3xl font-bold font-sans">
// 						Logo Here.
// 					</Link>

// 					{/* Desktop Navigation */}
// 					<nav className="hidden md:flex space-x-8 text-lg items-center">
// 						<Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
// 						<Link to="/Product" className="hover:text-gray-300 transition-colors">Category</Link>
// 						<Link to="/Product" className="hover:text-gray-300 transition-colors">Collections</Link>
// 						<Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>

// 						{/* Role-based Links */}
// 						{user?.role === "seller" && (
// 							<Link to="/seller" className="hover:text-gray-300">Seller Dashboard</Link>
// 						)}
// 						{user?.role === "admin" && (
// 							<Link to="/admin" className="hover:text-gray-300">Admin Dashboard</Link>
// 						)}

// 						{/* Show username + logout */}
// 						{user && (
// 							<>
// 								<span className="text-sm text-gray-300 ml-4">Hello, {user.name} ({user.role})</span>
// 								<button onClick={logout} className="ml-2 text-sm text-red-400 hover:underline">Logout</button>
// 							</>
// 						)}
// 					</nav>

// 					{/* Desktop Icons */}
// 					<div className="hidden md:flex items-center space-x-4 text-xl">
// 						<Link to="/favorites" className="hover:text-gray-300 transition-colors">❤️</Link>
// 						<Link to="/cart" className="hover:text-gray-300 transition-colors">🛒</Link>
// 						<Link to="/account" className="hover:text-gray-300 transition-colors">👤</Link>
// 					</div>

// 					{/* Mobile Toggle */}
// 					<button
// 						onClick={toggleMobileMenu}
// 						className="md:hidden text-2xl focus:outline-none"
// 						aria-label="Toggle menu"
// 					>
// 						☰
// 					</button>
// 				</div>

// 				{/* Mobile Menu */}
// 				{isMobileMenuOpen && (
// 					<div className="md:hidden px-4 pb-4 space-y-3 text-lg bg-gray-800">
// 						<Link to="/" className="block hover:text-gray-300 py-2 transition-colors">Home</Link>
// 						<Link to="/Product" className="block hover:text-gray-300 py-2 transition-colors">Category</Link>
// 						<Link to="/Product" className="block hover:text-gray-300 py-2 transition-colors">Collections</Link>
// 						<Link to="/contact" className="block hover:text-gray-300 py-2 transition-colors">Contact Us</Link>

// 						{user?.role === "seller" && (
// 							<Link to="/seller" className="block hover:text-gray-300">Seller Dashboard</Link>
// 						)}
// 						{user?.role === "admin" && (
// 							<Link to="/admin" className="block hover:text-gray-300">Admin Dashboard</Link>
// 						)}

// 						{user && (
// 							<div className="pt-2 text-sm text-gray-300">
// 								<p>Hello, {user.name} ({user.role})</p>
// 								<button onClick={logout} className="text-red-400 hover:underline">Logout</button>
// 							</div>
// 						)}

// 						<div className="flex space-x-4 pt-2 text-xl">
// 							<Link to="/favorites" className="hover:text-gray-300 transition-colors">❤️</Link>
// 							<Link to="/cart" className="hover:text-gray-300 transition-colors">🛒</Link>
// 							<Link to="/account" className="hover:text-gray-300 transition-colors">👤</Link>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</header>
// 	);
// }

// export default NavBar;

// with the login/logout function
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ lowercase 'context'

function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = useUser();
	const navigate = useNavigate();

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<header className="bg-gray-900 text-white w-full sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="text-3xl font-bold font-sans">Logo Here.</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8 text-lg items-center">
						<Link to="/" className="hover:text-gray-300">Home</Link>
						<Link to="/product" className="hover:text-gray-300">Category</Link>
						<Link to="/product" className="hover:text-gray-300">Collections</Link>
						<Link to="/contact" className="hover:text-gray-300">Contact Us</Link>

						{/* Role-based Links */}
						{user?.role === "seller" && <Link to="/seller" className="hover:text-gray-300">Seller Dashboard</Link>}
						{user?.role === "admin" && <Link to="/admin" className="hover:text-gray-300">Admin Dashboard</Link>}

						{/* Auth Links */}
						{user ? (
							<>
								<span className="text-sm text-gray-300 ml-4">Hello, {user.name} ({user.role})</span>
								<button onClick={handleLogout} className="ml-2 text-sm text-red-400 hover:underline">Logout</button>
							</>
						) : (
							<Link to="/login" className="ml-4 text-sm text-green-400 hover:underline">Login</Link>
						)}
					</nav>

					{/* Desktop Icons */}
					<div className="hidden md:flex items-center space-x-4 text-xl">
						<Link to="/favorites" className="hover:text-gray-300">❤️</Link>
						<Link to="/cart" className="hover:text-gray-300">🛒</Link>
						<Link to="/account" className="hover:text-gray-300">👤</Link>
					</div>

					{/* Mobile Toggle */}
					<button
						onClick={toggleMobileMenu}
						className="md:hidden text-2xl focus:outline-none"
						aria-label="Toggle menu"
					>
						☰
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden px-4 pb-4 space-y-3 text-lg bg-gray-800">
						<Link to="/" className="block hover:text-gray-300 py-2">Home</Link>
						<Link to="/product" className="block hover:text-gray-300 py-2">Category</Link>
						<Link to="/product" className="block hover:text-gray-300 py-2">Collections</Link>
						<Link to="/contact" className="block hover:text-gray-300 py-2">Contact Us</Link>

						{user?.role === "seller" && <Link to="/seller" className="block hover:text-gray-300">Seller Dashboard</Link>}
						{user?.role === "admin" && <Link to="/admin" className="block hover:text-gray-300">Admin Dashboard</Link>}

						<div className="pt-2 text-sm text-gray-300">
							{user ? (
								<>
									<p>Hello, {user.name} ({user.role})</p>
									<button onClick={handleLogout} className="text-red-400 hover:underline">Logout</button>
								</>
							) : (
								<Link to="/login" className="text-green-400 hover:underline">Login</Link>
							)}
						</div>

						<div className="flex space-x-4 pt-2 text-xl">
							<Link to="/favorites" className="hover:text-gray-300">❤️</Link>
							<Link to="/cart" className="hover:text-gray-300">🛒</Link>
							<Link to="/account" className="hover:text-gray-300">👤</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

export default NavBar;
