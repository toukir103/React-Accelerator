import CartProduct from "./CartProduct";
import Products from "./Products";

const MainContent = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Products />
        <CartProduct />
      </div>
    </main>
  );
};

export default MainContent;
