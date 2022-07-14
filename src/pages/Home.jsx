import requests from "../Requests";
import Main from "../components/Main";
import Row from "../components/Row";
import { UserAuth } from "../context/AuthContext";
import MainLoggedOut from "../components/MainLoggedOut";

const Home = () => {
  const { user } = UserAuth();
  return (
    <>
      {!user && <MainLoggedOut />}
      {user && (
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
          <Row
            rowId='popular'
            title='Popular'
            fetchURL={requests.requestPopular}
          />
          <Row
            rowId='horror'
            title='Horror'
            fetchURL={requests.requestHorror}
          />
        </>
      )}
    </>
  );
};

export default Home;
