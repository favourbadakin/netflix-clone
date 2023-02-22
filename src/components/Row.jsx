import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);
   const slider = useRef();
   const slideLeft = () => {
     slider.current.scrollLeft = slider.current.scrollLeft - 500;
   };

   const slideRight = () => {
      slider.current.scrollLeft = slider.current.scrollLeft + 500;
   };
  //console.log(movies)
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute left-0  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          ref={slider}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
