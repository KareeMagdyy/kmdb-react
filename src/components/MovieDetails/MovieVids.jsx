const MovieVids = ({ movieVideos }) => {
  const youTubeURL = "https://www.youtube.com/embed/";
  const videos = movieVideos.slice(0, 4);

  return (
    <>
      {videos.length > 1 && (
        <>
          <div className='container mx-auto text-white p-6'>
            <h1 className='text-4xl  font-bold mb-5'>More Videos</h1>
            <p className='bg-red-600 w-[80px]  h-[1px] mb-5'></p>
            <div className='grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid items-center justify-center gap-3'>
              {videos.map((video) => (
                <div key={video.id}>
                  <iframe
                    className='h-[250px] w-[90%] md:w-auto '
                    title={video?.title || video?.name}
                    frameBorder='0'
                    src={youTubeURL + video.key}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieVids;
