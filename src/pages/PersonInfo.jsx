import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PersonSideBar from "../components/PersonDetails/PersonSideBar";
import PersonBiography from "../components/PersonDetails/PersonBiography";
import PersonKnownFor from "../components/PersonDetails/PersonKnownFor";
import PersonFilmography from "../components/PersonDetails/PersonFilmography";
import BlockAdultContent from "../components/UI/BlockAdultContent";

const PersonInfo = () => {
  const [info, setInfo] = useState([]);
  const [filmography, setFilmography] = useState([]);
  const [social, setSocial] = useState([]);
  const params = useParams();
  const key = process.env.REACT_APP_IMDB_API_KEY;

  // SortFilmography
  const concatFilmography = filmography.cast?.concat(filmography.crew);
  const sortedFilmography = concatFilmography?.sort(
    (a, b) => new Date(a.release_date) - new Date(b.release_date)
  );
  const filmographyUsed = sortedFilmography?.reverse();

  const getInfo = async (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => setInfo(res.data));
  };
  const getFilmography = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
      )
      .then((res) => setFilmography(res.data));
  };
  const getSocial = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${key}&language=en-US`
      )
      .then((res) => setSocial(res.data));
  };

  useEffect(() => {
    getInfo(params.id);
    getFilmography(params.id);
    getSocial(params.id);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      {!info.adult ? (
        <section className='container mx-auto pb-10 pt-[120px] '>
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto'>
            <PersonSideBar
              info={info}
              social={social}
              classes='col-auto lg:col-span-1 text-white text-center lg:text-left'
            />
            <div className='col-auto lg:col-span-2 text-white'>
              <PersonBiography info={info} />
              <PersonKnownFor castAsActor={filmography?.cast} />
              <PersonFilmography filmography={filmographyUsed} />
            </div>
          </div>
        </section>
      ) : (
        <BlockAdultContent />
      )}
    </>
  );
};

export default PersonInfo;
