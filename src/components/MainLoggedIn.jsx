import Main from "./Main";
import Row from "./Row";
import requests from "../Requests";

const MainLoggedIn = () => {
  return (
    <main>
      <Main />
      <Row
        rowId='playingNow'
        title='Playing Now'
        fetchURL={requests?.requestPlayingNow}
      />
      <Row
        rowId='trending'
        title='Trending Now'
        fetchURL={requests?.requestTrending}
      />
      <Row
        rowId='eg'
        title='Playing Now In Egypt'
        fetchURL={requests?.requestEGNow}
      />
      <Row
        rowId='EGY-Popular'
        title='Popular In Egypt'
        fetchURL={requests?.requestEGPopular}
      />
      <Row
        rowId='toprated'
        title='TopRated'
        fetchURL={requests?.requestTopRated}
      />
      <Row rowId='popular' title='Popular' fetchURL={requests.requestPopular} />
    </main>
  );
};

export default MainLoggedIn;
