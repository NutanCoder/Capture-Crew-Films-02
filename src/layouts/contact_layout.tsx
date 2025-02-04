import NavBar from "../components/navbar";
import ContactPage from "../pages/contact";

function ContactLayout() {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full bg-opacity-20 p-2 flex justify-between items-center">
        <NavBar />
      </nav>
      <ContactPage />
    </div>
  );
}

export default ContactLayout;
