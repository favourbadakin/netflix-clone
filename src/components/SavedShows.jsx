import React, { useRef, useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext'
import { AiOutlineClose } from 'react-icons/ai'
import { db } from '../firebase'; 
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const SavedShows = () => {
  
const [movies, setMovies] = useState([])
    const { user } = UserAuth()
    const slider = useRef();
const deleteShow = async (passedID) => {
    try{
const result = movies.filter((item) => item.id !== passedID)
await updateDoc(movieRef, {
    savedShows: result,
})
    }catch(error){
        console.log(error)
    }
}
const movieRef = doc(db, 'users', `${user?.email}`)
    const slideLeft = () => {
      slider.current.scrollLeft = slider.current.scrollLeft - 500;
    };

    const slideRight = () => {
      slider.current.scrollLeft = slider.current.scrollLeft + 500;
    };

    useEffect(() => {
onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
    setMovies(doc.data()?.savedShows)
})
    },[user?.email])


       const imgUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          ref={slider}
        >
          {movies?.map((item, id) => (
            <div
              className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              key={id}
            >
              <img
                className="w-full h-auto block"
                src={`${imgUrl}${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full text-center">
                  {item?.title}
                </p>
                <p onClick={() => deleteShow(item.id)} className='absolute  text-gray-300 right-4 top-4'><AiOutlineClose /></p>
              </div>
            </div>
          ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
       
      </div>
    </>
  );};
export default SavedShows