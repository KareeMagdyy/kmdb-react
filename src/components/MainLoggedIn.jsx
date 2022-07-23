import { useEffect, useState } from "react";
import Main from "./Main";
import Row from "./Row";
import requests from "../Requests";
import axios from "axios";

const MainLoggedIn = () => {
  const [location, setLocation] = useState("");

  const IP_RE_KEY = process.env.REACT_APP_IP_REGISTRY_KEY;

  useEffect(() => {
    axios
      .get(`https://api.ipregistry.co/?key=${IP_RE_KEY}`)
      .then((res) => setLocation(res.data.location));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Main />
      <Row
        rowId='country-playingNow'
        title={`Playing Now In ${location?.country?.name}` || "Playing Now"}
        fetchURL={requests?.playingNow}
        region={`&region=${location?.country?.code}`}
      />

      <Row
        rowId='country-Popular'
        title={`Popular In ${location?.country?.name}` || "Playing Now"}
        fetchURL={requests?.popular}
        region={`&region=${location?.country?.code}`}
      />

      <Row
        rowId='upcoming'
        title='Global Up Coming'
        fetchURL={requests?.upcoming}
      />

      <Row
        rowId='trending'
        title={`Global Trending `}
        fetchURL={requests?.trendingDaily}
      />

      <Row
        rowId='toprated'
        title='Global Top Rated'
        fetchURL={requests?.topRated}
      />
    </main>
  );
};

export default MainLoggedIn;
