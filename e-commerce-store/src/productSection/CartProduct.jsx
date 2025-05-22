import { useContext } from "react";
import { ProductContext } from "../context";
import { getImgUrl } from "../utils/product-utility";
const CartProduct = () => {
  const { cartData,setCartData } = useContext(ProductContext);
const handleQuantityIncrease = (itemId) => {
  const updatedCart = cartData.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        quantity: (item.quantity || 1) + 1, 
      };
    }
    return item;
  });

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
                alt="Gradient Graphic T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-red-500 text-sm">×</span>
              </div>
              <p className="text-sm text-gray-500">Size: Large</p>
              <p className="text-sm text-gray-500">Color: White</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">${item.price}</p>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button 
                   onClick={() => handleQuantityIncrease(item.id)}
                  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$565</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-$113</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">$15</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
              <span className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </span>
            </div>
            <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
              Apply
            </button>
          </div>

          <a
            href="#"
            className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Go to Checkout
            <span className="inline-block ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
