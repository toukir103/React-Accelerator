import { useState } from "react"
import './App.css'
import MovieList from './cine/MovieList'
import { MovieContext } from './context'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
   const [cartData,setCartData]=useState([]);
  return (
   
    <>
    <MovieContext.Provider value={{cartData,setCartData}} >
       <Header/>
     		<div className="max-w-7xl mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
     <Sidebar/>
     <MovieList/>
		</div>
    <Footer/>
   
   </MovieContext.Provider>
    </>
  )
}

export default App
