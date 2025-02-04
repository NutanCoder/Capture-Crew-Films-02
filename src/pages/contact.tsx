import Footer from "../components/footer";

function ContactPage() {
  return (
    <div className="bg-[#edecee]">
      <section className="mb-8">
        <img
          className="h-[400px] object-cover w-full"
          src="https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkomalvintage01.3e85265b.jpg&w=3840&q=75"
          alt="contact-background"
        />
      </section>
      <section className="container mx-auto">
        <div className="text-center">
          <p className="text-gray-700 mb-4 text-sm">
            Please fill in the form below and provide as much details as
            possible to help us create an accurate quote.
          </p>
          <p className="text-gray-700 mb-4 text-sm">
            We will try to get back within 24hrs , give us a call on the number
            below if you don't hear from us or if its a last minute enquiry.
          </p>
          <p className="text-gray-700 mb-4 text-sm">
            Please go through our FAQ section to find answers to some common
            questions.
          </p>
        </div>
        <div className="text-center text-sm">
          <p className="text-gray-700">info@capturecrewfilms.com</p>
          <p className="text-gray-700">+91 6372090901</p>
          <p className="text-gray-700">Bhubaneswar</p>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-8">
          <div className="flex justify-center">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <form action="">
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-3 py-2"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-3 py-2"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="name">
                    Phone
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-3 py-2"
                    type="text"
                    name="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="">
                    Tell us more about your wedding - event flow, venues.
                    (required)
                  </label>
                  <textarea
                    className="border-gray-300 rounded-md border-2 w-full mt-2 p-2"
                    name=""
                    rows={6}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="location">
                    Location of the Wedding
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-3 py-2"
                    type="text"
                    name="location"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="event_date">
                    Event Dates
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-3 py-2"
                    type="text"
                    name="event_date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="font-light text-xs" htmlFor="cb">
                    {" "}
                    What services are you looking for?
                  </label>

                  <div className="mt-2">
                    <label className="font-light text-xs" htmlFor="photography">
                      <input
                        type="checkbox"
                        name="services"
                        id="photography"
                        value="photography"
                        className=""
                      />
                      Photography
                    </label>
                  </div>
                  <div>
                    <label className="font-light text-xs" htmlFor="films">
                      <input
                        type="checkbox"
                        id="films"
                        value="films"
                        name="services"
                      />
                      Films
                    </label>
                  </div>
                  <div>
                    <label
                      className="font-light text-xs"
                      htmlFor="films-photography"
                    >
                      <input
                        type="checkbox"
                        id="films-photography"
                        value="both"
                        name="services"
                      />
                      Films and Photography
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-black text-white rounded-md p-2 text-sm cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
