import { getAllProduct } from "../data/productData";
import Product from "./Product";
const Products = () => {
  const singleproducts = getAllProduct();

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {singleproducts.map((singleproduct) => (
          <Product singlecart={singleproduct}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
