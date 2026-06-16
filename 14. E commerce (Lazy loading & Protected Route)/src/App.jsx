import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-slate-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">My E-commerce App</h1>

            <div className="space-x-6">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>

              <Link to="/products" className="hover:text-blue-400">
                Products
              </Link>

              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
            </div>
          </div>
        </nav>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[80vh]">
              <div className="text-2xl font-bold">Loading Product...</div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route path="/login" element={<Login />} />

            <Route
              path="/product/:id"
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
