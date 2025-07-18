import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import CartSummary from "../components/CartSummary";

const ProductListPage = () => {
  const [filter, setFilter] = useState({ category: "", stockOnly: false });

  const filteredProducts = products.filter((p) => {
    const categoryMatch = filter.category ? p.category === filter.category : true;
    const stockMatch = filter.stockOnly ? p.inStock : true;
    return categoryMatch && stockMatch;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center text-2xl font-bold mb-6 text-blue-800">
        Welcome! Explore our top quality products 🛍️
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar onFilterChange={setFilter} categories={categories} />

        <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <CartSummary />
      </div>
    </div>
  );
};

export default ProductListPage;
