import React, {useEffect, useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#DC2626"}
          loading={loading}
          size={30}
          className="my-[25vh] mx-[50vw]"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <Main />
          <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
          <Row title="Popular" fetchURL={requests.requestPopular} />
          <Row title="Trending" fetchURL={requests.requestTrending} />
          <Row title="TopRated" fetchURL={requests.requestTopRated} />
          <Row title="Horror" fetchURL={requests.requestHorror} />
        </div>
      )}
    </>
  );
}

export default Home