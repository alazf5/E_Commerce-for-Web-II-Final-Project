import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div>
			<NavBar />
			<Outlet /> 
			<Footer />
		</div>
	);
}

export default Layout;
