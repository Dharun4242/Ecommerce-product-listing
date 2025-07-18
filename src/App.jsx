
import { Routes ,Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from "./pages/ProductDetailPage";


export default function App() {
  return (
    
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProductListPage />}/>
          <Route path="/product/:id" element={<ProductDetailPage />} />
        
        </Routes>
      </CartProvider>
   
  );
}