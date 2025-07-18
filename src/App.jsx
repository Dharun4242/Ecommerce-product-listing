

import { CartProvider } from "./context/CartContext";
import ProductListPage from './pages/ProductListPage';


export default function App() {
  return (
    
      <CartProvider>
        <ProductListPage />
      </CartProvider>
   
  );
}