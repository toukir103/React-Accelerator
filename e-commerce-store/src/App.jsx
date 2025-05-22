import { useState } from 'react';
import Announcement from "./Announcement";
import "./App.css";
import { ProductContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import NewsSection from "./NewsSection";
import MainContent from "./productSection/MainContent";
function App() {
  const[cartData,setCartData]=useState([]);
  return (
    <>
    <ProductContext.Provider value={{cartData,setCartData}} >
      <Announcement/>
      <Header/>
      <MainContent/>
      <NewsSection/>
      <Footer/>
      </ProductContext.Provider>
    </>
  );
}

export default App;
