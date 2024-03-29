import React, { useState, useEffect } from "react";
import SavedShows from "../components/SavedShows";
import ClipLoader from "react-spinners/ClipLoader";

const Account = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <span className="grid place-items-center">
          <ClipLoader
            color={"#DC2626"}
            loading={loading}
            size={30}
            className="my-[25vh]"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </span>
      ) : (
        <>
          <div className="w-full text-white">
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/2a5c0b10-bcff-4555-8c6b-f4b46657636c/NG-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="backdrop"
              className="h-[400px] w-full object-cover"
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
            <div className="absolute top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
            </div>
          </div>
          <SavedShows />
        </>
      )}
    </>
  );
};

export default Account;
