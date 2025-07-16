import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Cart from "./pages/Cart.jsx";
import User from "./pages/User.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import PaginationProvider from "./contexts/PaginationContext.jsx";

function App() {
  return (
    <PaginationProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </PaginationProvider>
  );
}

export default App;
