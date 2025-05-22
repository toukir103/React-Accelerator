import { useContext } from "react";
import { ProductContext } from "../context";
import { getImgUrl } from "../utils/product-utility";
import Rating from "./Rating";
const singlecart = ({ singlecart }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cartData, setCartData } = useContext(ProductContext);
  const isInCart = cartData.some((item) => item.id === singlecart.id);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setCartData([...cartData, singlecart]);
  };

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    setCartData(cartData.filter((item) => item.id !== singlecart.id));
  };
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImgUrl(singlecart.image)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{singlecart.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              <Rating value={singlecart.rating} />
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {singlecart.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({singlecart.stock}pcs left)
          </span>
        </div>
        <p className="font-bold">${singlecart.price}</p>
       
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default singlecart;
