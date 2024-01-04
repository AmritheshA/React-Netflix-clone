import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";
import { Footer } from "../Components/Footer";
import { useEffect, useState } from "react";
import Skeleton from "../Components/Skeleton";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          <Main />
          <Row
            id="1"
            title="Popular"
            requestURL={requests.requestPopular}
            loading={loading}
          />
          <Row
            id="2"
            title="Top Rated"
            requestURL={requests.requestTopRated}
            loading={loading}
          />
          <Row
            id="3"
            title="Trending"
            requestURL={requests.requestTrending}
            loading={loading}
          />
          <Row
            id="4"
            title="Up Coming"
            requestURL={requests.requestUpcoming}
            loading={loading}
          />
          <Row
            id="5"
            title="Now Playing"
            requestURL={requests.requestNowPlaying}
            loading={loading}
          />
          <Row
            id="6"
            title="Horror"
            requestURL={requests.requestHorror}
            loading={loading}
          />
          <Row
            id="7"
            title="Action Movies"
            requestURL={requests.requestActionMovies}
            loading={loading}
          />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
