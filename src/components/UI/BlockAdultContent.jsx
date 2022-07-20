import goBack from "../../assets/go-back.gif";
import goBack2 from "../../assets/nope-turn.gif";
const BlockAdultContent = () => {
  const gifs = [goBack, goBack2];
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center text-lg'>
      <h2 className='py-4 text-red-600 font-bold text-2xl'>Blocked Content</h2>
      <img src={randomGif} alt='go back' className='py-3 ' />
      <button onClick={() => window.history.back()}>🔙 Go Back</button>
    </div>
  );
};

export default BlockAdultContent;
