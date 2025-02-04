import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

function NavBar() {
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            className="w-24 cursor-pointer"
            src="https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblack.c0e60bb7.jpg&w=3840&q=75"
            alt="logo"
          />
        </Link>
        <div className="flex gap-4 items-baseline">
          <Link className="text-xs hover:text-gray-600" to={"/photography"}>
            Photography
          </Link>
          <Link className="text-xs hover:text-gray-600" to={"/film"}>
            Films
          </Link>
          <Link className="text-xs hover:text-gray-600" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="text-xs hover:text-gray-600" to={"/crew"}>
            Crew
          </Link>
          <Link className="text-xs hover:text-gray-600" to={"/about"}>
            About Us
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to={"https://www.instagram.com/capturecrew.films/"}>
            <FaInstagram className="text-2xl" />
          </Link>
          <Link to={"https://api.whatsapp.com/send?phone=916372090901"}>
            <BsChatDots className="text-2xl" />
          </Link>
          <Link
            className="bg-[#c9ab81] text-white hover:bg-[#B69A70] hover:text-black px-4 py-2 text-xs rounded-lg"
            to={"/contact"}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
