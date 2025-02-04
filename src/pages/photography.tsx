function PhotographyPage() {
  const imageUrl = [
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fagamixsuban.jpg&w=3840&q=75",
      title: "Suban & Agami",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fbiswojeettxkomal.jpg&w=3840&q=75",
      title: "Biswojeet & Komal",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Flinaxsandip.jpg&w=3840&q=75",
      title: "Sandip & Lina",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fsambitxabhilipsa.jpg&w=3840&q=75",
      title: "Sambit & Abhilipsa",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fbishnuxanisha.jpg&w=3840&q=75",
      title: "Bishnu & Anisha",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fayushxsomambika.jpg&w=3840&q=75",
      title: "Ayush & Somambika",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fanshuxabhinav.jpg&w=3840&q=75",
      title: "Abhinav & Anshu",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2Fimages%2FWedding-portfolio%2Fabhishekxsudha.jpg&w=3840&q=75",
      title: "Abhishek & Sudha",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-3xl mb-4 p-6">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {imageUrl.map((item) => {
            return (
              <div>
                <img
                  className="h-[400px] w-full object-cover p-2 rounded-2xl"
                  src={item.url}
                  alt="graphy"
                />
                <h1 className="text-center text-2xl font-bold h1_photography my-2">
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

export default PhotographyPage;
