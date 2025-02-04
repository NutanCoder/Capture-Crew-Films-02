import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./layouts/contact_layout";
import PhotographyPage from "./pages/photography";
import CrewPage from "./pages/crew";
import About from "./pages/about";
import AppLayout from "./layouts/app_layout";
import ContactLayout from "./layouts/contact_layout";
import "./app.css";
import FilmPage from "./pages/film";
import HomePage from "./pages/home_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<ContactLayout />}>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
