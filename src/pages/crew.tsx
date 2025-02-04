function CrewPage() {
  const crewImages = [
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsashank.711ce29d.jpg&w=3840&q=75",
      title: "Sashank Shekhar",
      designation: "Lead Photographer & Editor",
    },

    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmunmay.45766042.jpg&w=3840&q=75",
      title: "Munmay Swain",
      designation: "Lead Cinematographer & Editor",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdhuryodhan.427ffeb1.jpeg&w=3840&q=75",
      title: "Duryodhan Tudu",
      designation: "Lead Photographer",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftony02.32c04299.jpg&w=3840&q=75",
      title: "Sujoy Sen",
      designation: "Drone Pilot",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankit.e2b6b0c1.jpg&w=3840&q=75",
      title: "Ankit Nayak",
      designation: "Photographer",
    },
    {
      url: "https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandip.3a8840ed.jpg&w=3840&q=75",
      title: "Sandeep Kumar",
      designation: "Cinematographer & Editor",
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-8 header text-center">Crew</h1>
      <div className="bg-white rounded-xl p-6 md:my-4 mx-4">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {crewImages.map((item) => {
            return (
              <div>
                <img
                  className="w-full h-[400px] object-cover p-2 rounded-2xl cursor-pointer"
                  src={item.url}
                  alt="crew"
                />

                <h1 className="text-center font-bold text-xl">{item.title}</h1>
                <p className="text-center font-light text-xs">
                  {item.designation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
