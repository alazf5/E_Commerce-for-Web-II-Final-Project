// import React from 'react';
// import { createContext, useState, useContext } from 'react';

// const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   const login = async (credentials) => {
//     try {
//       // Simulate API call for JWT
//       const { token, user } = await mockJWTAuth(credentials);
      
//       // Store in state
//       setUser(user);
//       setToken(token);
      
//       // Store in localStorage to persist across refreshes
//       localStorage.setItem('authToken', token);
//       localStorage.setItem('user', JSON.stringify(user));
      
//       return { success: true };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//   };

//   // Check for existing session on load
//   const initializeAuth = () => {
//     const storedToken = localStorage.getItem('authToken');
//     const storedUser = localStorage.getItem('user');
//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, token, login, logout, initializeAuth }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // Mock JWT authentication function
// async function mockJWTAuth({ email, password }) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email === 'user@example.com' && password === 'password123') {
//         resolve({
//           token: 'mock.jwt.token.123',
//           user: {
//             id: 1,
//             name: 'Demo User',
//             email: 'user@example.com',
//             role: 'customer'
//           }
//         });
//       } else {
//         reject(new Error('Invalid credentials'));
//       }
//     }, 500); // Simulate network delay
//   });
// }

// export function useUser() {
//   return useContext(UserContext);
// }


import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate API call with JWT response
      const response = await mockJWTAuth(credentials);
      
      setUser(response.user);
      setToken(response.token);
      
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      token, 
      isLoading,
      login, 
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
}

// Mock JWT authentication
async function mockJWTAuth({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'seller@shop.com' && password === 'seller123') {
        resolve({
          token: 'mock.seller.jwt.token',
          user: {
            id: 2,
            name: 'Seller User',
            email: 'seller@shop.com',
            role: 'seller'
          }
        });
      } else if (email === 'admin@shop.com' && password === 'admin123') {
        resolve({
          token: 'mock.admin.jwt.token',
          user: {
            id: 3,
            name: 'Admin User',
            email: 'admin@shop.com',
            role: 'admin'
          }
        });
      } else if (email === 'user@shop.com' && password === 'user123') {
        resolve({
          token: 'mock.user.jwt.token',
          user: {
            id: 1,
            name: 'Regular User',
            email: 'user@shop.com',
            role: 'user'
          }
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 500);
  });
}

export function useUser() {
  return useContext(UserContext);
}