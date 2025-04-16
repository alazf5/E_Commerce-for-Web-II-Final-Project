// import React from "react";
// import NavBar from "./components/navbar";
// import Footer from "./components/footer";
// import Home from "./pages/HomePage";
// import Hero from "./pages/hero";
// import ProductPage from "./pages/ProductDetail";

// function App() {
// 	return (
// 		<div className="flex flex-col min-h-screen">
// 			<ProductPage />
// 			{/* <Hero /> */}
// 			{/* <NavBar />
// 			<main className="flex-grow">
// 				<div className="container mx-auto px-4 py-8">
// 					<Home />
// 				</div>
// 			</main>
// 			<Footer /> */}
// 		</div>
// 	);
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/layout';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductDetail';
// import SellerDashboard from './pages/dashboards/sellerDashboard';
// import AdminDashboard from './pages/dashboards/adminDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="product" element={<ProductPage />} />
//           <Route path="seller" element={<SellerDashboard />} />
//           <Route path="admin" element={<AdminDashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import Layout from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import ProductDetail from "./pages/ProductDetail";
// import SellerProductList from "./pages/dashboards/SellerProductList";
// import AddProduct from "./pages/dashboards/AddProduct";
// import DashboardLayout from "./components/dashboardLayout";
// import AdminDashboard from "./pages/dashboards/adminDashboard";
// import LoginPage from "./pages/LoginPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import ProfilePage from "./pages/ProfilePage";

// function App() {
// 	return (
		// <Router>
		// 	<Routes>
		// 		{/* Public Routes */}
		// 		<Route path="/" element={<Layout />}>
		// 			<Route path="/" element={<Layout />}>
		// 				<Route index element={<HomePage />} />
		// 				<Route path="login" element={<LoginPage />} />
		// 			</Route>

		// 			<Route path="product" element={<ProductDetail />} />
		// 			<Route path="login" element={<LoginPage />} />
		// 		</Route>

		// 		{/* Seller Routes */}
		// 		<Route
		// 			path="/seller"
		// 			element={
		// 				<ProtectedRoute role="seller">
		// 					<DashboardLayout />
		// 				</ProtectedRoute>
		// 			}
		// 		>
		// 			<Route index element={<SellerProductList />} />
		// 			<Route path="add" element={<AddProduct />} />
		// 		</Route>

		// 		{/* Admin Routes */}
		// 		<Route
		// 			path="/admin"
		// 			element={
		// 				<ProtectedRoute role="admin">
		// 					<AdminDashboard />
		// 				</ProtectedRoute>
		// 			}
		// 		/>
		// 	</Routes>
		// </Router>
// 		<Router>
// 			<Routes>
// 				{/* 🔐 Login - no layout */}
// 				<Route path="/login" element={<LoginPage />} />

// 				{/* 🌐 Public + Profile Routes with Layout */}
// 				<Route path="/" element={<Layout />}>
// 					<Route index element={<HomePage />} />
// 					<Route path="product" element={<ProductDetail />} />
// 				</Route>
// 				<Route
// 					path="/account"
// 					element={
// 						<ProtectedRoute>
// 							<ProfilePage />
// 						</ProtectedRoute>
// 					}
// 				/>
// 				{/* 🛍️ Seller Dashboard Routes (protected) */}
// 				<Route
// 					path="/seller"
// 					element={
// 						<ProtectedRoute role="seller">
// 							<DashboardLayout />
// 						</ProtectedRoute>
// 					}
// 				>
// 					<Route index element={<SellerProductList />} />
// 					<Route path="add" element={<AddProduct />} />
// 				</Route>

// 				{/* 🛠️ Admin Dashboard (protected) */}
// 				<Route
// 					path="/admin"
// 					element={
// 						<ProtectedRoute role="admin">
// 							<AdminDashboard />
// 						</ProtectedRoute>
// 					}
// 				/>
// 			</Routes>
// 		</Router>
// 	);
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import SellerProductList from './pages/dashboards/SellerProductList';
import AddProduct from './pages/dashboards/AddProduct';
import DashboardLayout from './components/dashboardLayout';
import AdminDashboard from './pages/dashboards/adminDashboard';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="product" element={<ProductDetail />} /> */}
			<Route path="/product/:id" element={<ProductDetail />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Seller Dashboard */}
          <Route
            path="/seller"
            element={
              <ProtectedRoute role="seller">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SellerProductList />} />
            <Route path="add" element={<AddProduct />} />
          </Route>

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;