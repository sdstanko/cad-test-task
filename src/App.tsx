import { Route, Routes } from "react-router";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      {/* <Route path="/page/:id" element={<ProductList />} /> */}
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
