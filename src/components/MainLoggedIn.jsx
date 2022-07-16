import Main from "./Main";
import Row from "./Row";
import requests from "../Requests";

const MainLoggedIn = () => {
  return (
    <>
      <Main />
      <Row
        rowId='playingNow'
        title='Playing Now'
        fetchURL={requests?.requestPlayingNow}
      />
      <Row
        rowId='eg'
        title='Egyptian Movies'
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
    </>
  );
};

export default MainLoggedIn;
