import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/login'
import Dashboard from './pages/dashboard/dashboard'
import Layout from './common/layout/layout'
import ProductDetails from './pages/product-details/product-details'
import ProductByCategory from './pages/category/productsByCategory'
import ProtectedRoutes from './protected-routes'

const App = () => {

  const isLoggedIn = () => {
    if (sessionStorage.getItem("token")) {
      return true
    } else {
      return false
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="/home/dashboard"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn()}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/single-product/:id"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn()}>
              <ProductDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path=":category"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn()}>
              <ProductByCategory />
            </ProtectedRoutes>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <div className="h-[100svh] flex items-center justify-center">
            404: Page not found
          </div>
        }
      />
    </Routes>
  );
}

export default App