// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useUser } from "../Context/UserContext";

// function ProtectedRoute({ role, children }) {
//   const { user } = useUser();
//   const location = useLocation();

//   if (!user) {
//     // Save the original path in `state.from`
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

function ProtectedRoute({ role, children }) {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;