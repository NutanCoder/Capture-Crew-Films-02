function FilmPage() {
  const videosUrl = [
    {
      url: "https://player.vimeo.com/video/1025481605?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Abhinav & Anshu",
    },
    {
      url: "https://player.vimeo.com/video/1025483665?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Biswajeet & Komal",
    },
    {
      url: "https://player.vimeo.com/video/1025484683?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Suban & Agami",
    },
    {
      url: "https://player.vimeo.com/video/1025502039?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Bishnu & Anisha",
    },
  ];
  return (
    <div className="container md:mx-auto mx-2 my-4">
      <h1 className="header font-medium text-5xl text-center mb-8">
        Driven By Cinematic Art
      </h1>
      <div className="bg-white p-6 rounded-lg">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {videosUrl.map((item) => {
            return (
              <div>
                <iframe
                  className="h-[300px] w-full object-cover"
                  src={item.url}
                ></iframe>
                <h1 className="font-bold text-xl text-center h1_title">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
