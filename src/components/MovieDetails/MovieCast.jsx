import { v4 as uuid } from "uuid";
import PlainRow from "../UI/PlainRow";
import CastCard from "../UI/CastCard";

const MovieCast = ({ movieCastAndCrew }) => {
  let actors = movieCastAndCrew?.cast?.slice(0, 22);

  const renderActors = actors?.map((actor) => (
    <CastCard
      key={uuid()}
      img={actor.profile_path}
      name={actor.name}
      character={actor.character}
      gender={actor.gender}
    />
  ));

  return (
    <>
      <div className='container mx-auto p-6'>
        <h1 className='   text-white text-4xl  font-bold mb-5'>Cast</h1>
        <p className='bg-red-600 w-[80px]  h-[1px]'></p>
      </div>
      <PlainRow
        title={false}
        rowId='cast'
        children={renderActors}
        classes=' p-6'
      />
    </>
  );
};

export default MovieCast;
