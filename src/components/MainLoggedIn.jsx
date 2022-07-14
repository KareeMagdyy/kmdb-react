import Main from "./Main";
import Row from "./Row";
import requests from "../Requests";

const MainLoggedIn = () => {
  return (
    <>
      <Main />
      <Row
        rowId='upcoming'
        title='Upcoming'
        fetchURL={requests.requestUpcoming}
      />
      <Row
        rowId='trending'
        title='Trending'
        fetchURL={requests.requestTrending}
      />
      <Row
        rowId='toprated'
        title='TopRated'
        fetchURL={requests.requestTopRated}
      />
      <Row rowId='popular' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowId='horror' title='Horror' fetchURL={requests.requestHorror} />
    </>
  );
};

export default MainLoggedIn;
