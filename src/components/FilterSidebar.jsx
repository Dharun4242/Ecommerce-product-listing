import { useState } from "react";

const FilterSidebar = ({ onFilterChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange({ category: newCategory, stockOnly });
  };

  const handleStockChange = (e) => {
    const newStockOnly = e.target.checked;
    setStockOnly(newStockOnly);
    onFilterChange({ category: selectedCategory, stockOnly: newStockOnly });
  };

  return (
    <div className="w-full md:w-1/5 bg-white shadow-lg rounded-xl p-5">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filters</h2>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-medium">Category</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="stockOnly"
          checked={stockOnly}
          onChange={handleStockChange}
          className="h-4 w-4 text-blue-600"
        />
        <label htmlFor="stockOnly" className="text-gray-700 font-medium">
          Show In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
