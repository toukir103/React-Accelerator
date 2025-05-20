import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from './MovieDetailsModal';
import Rating from "./Rating";
const MovieCard = ({movie}) => {
    const [showModal,setShowModal]=useState(false);
    const [selectedMovie, setSelectedMovie]=useState(null);
const {cartData,setCartData} = useContext(MovieContext);
    function handleModalClose(){
        setSelectedMovie(null);
        setShowModal(false);
        
    } 
    function handleShowModal(movie){
        setShowModal(true);
        setSelectedMovie(movie);
    }
   function handleAddtoCart(event, movie){
      event.stopPropagation();
      const found = cartData.find((item)=>{
        return item.id===movie.id;
      })
      if(!found){
        setCartData([...cartData,movie]);
      }else{
        console.error(`The movie ${movie.title} has been added to the cart already!`)
      }
   }
  return (
   <>
   {  showModal && <MovieDetailsModal 
   movie={selectedMovie}
   onClose={handleModalClose}
   onCartAdd={handleAddtoCart}
   />} 
    <figure
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
    >
        <a href="#" onClick={()=>handleShowModal(movie)}>
      <img
        className="w-full object-cover"
        src={getImgUrl(movie.cover)}
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <div className="flex items-center space-x-1 mb-5">
         <Rating value={movie.rating} />
        </div>
        <a
          className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
          onClick={(e)=>handleAddtoCart(e,movie)}
        >
          <img src="./assets/tag.svg" alt="" />
          <span>${movie.price}| Add to Cart</span>
        </a>
       
      </figcaption>
       </a>
    </figure>
    </>
  );
};

export default MovieCard;
