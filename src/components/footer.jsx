import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-900 text-white pt-12 pb-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold font-sans">Shop Name</h3>
						<p className="text-gray-400">Shop Description.</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<span className="sr-only">Facebook</span>
								<i className="fab fa-facebook text-xl"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<span className="sr-only">Twitter</span>
								<i className="fab fa-twitter text-xl"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<span className="sr-only">Instagram</span>
								<i className="fab fa-instagram text-xl"></i>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<FooterLink href="/" text="Home" />
							<FooterLink href="/products" text="Products" />
							<FooterLink href="/about" text="About Us" />
							<FooterLink href="/contact" text="Contact" />
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Customer Service</h4>
						<ul className="space-y-2">
							<FooterLink href="/faq" text="FAQs" />
							<FooterLink href="/shipping" text="Shipping Policy" />
							<FooterLink href="/returns" text="Return Policy" />
							<FooterLink href="/privacy" text="Privacy Policy" />
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<address className="text-gray-400 not-italic space-y-2">
							<p className="flex items-center">
								<i className="fas fa-map-marker-alt mr-2"></i>
								123 Shop Street, Addis Ababa, Ethiopia
							</p>
							<p className="flex items-center">
								<i className="fas fa-phone mr-2"></i>
								(09) 09090909
							</p>
							<p className="flex items-center">
								<i className="fas fa-envelope mr-2"></i>
								info@shopname.com
							</p>
						</address>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} shop name. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

// Reusable footer link component
function FooterLink({ href, text }) {
	return (
		<li>
			<a
				href={href}
				className="text-gray-400 hover:text-white transition-colors"
			>
				{text}
			</a>
		</li>
	);
}

export default Footer;
