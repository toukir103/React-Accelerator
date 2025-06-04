import { useContext } from "react";
import { ProductContext } from "../context";
import { getImgUrl } from "../utils/product-utility";
import OrderSummary from "./OrderSummary";

const CartProduct = () => {
  const { cartData, setCartData } = useContext(ProductContext);

  const handleQuantityIncrease = (itemId) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCartData(updatedCart);
  };

  const handleQuantityDecrease = (itemId) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartData(updatedCart);
  };
 const handleRemoveItem = (itemId) => {
    const updatedCart = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCart);
  };
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img
                src={getImgUrl(item.image)}
                alt={item.name}
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-red-500 text-sm cursor-pointer"
                onClick={() => handleRemoveItem(item.id)}
                >×</span>
              </div>
              <p className="text-sm text-gray-500">Size: {item.size || "N/A"}</p>
              <p className="text-sm text-gray-500">Color: {item.color || "N/A"}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">${item.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityDecrease(item.id)}
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityIncrease(item.id)}
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <OrderSummary cartData={cartData} />
      </div>
    </div>
  );
};

export default CartProduct;
