import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import InfinitePosts from "./pages/InfinitePosts";
import { ToastContainer } from "react-toastify";
import CatFacts from "./pages/CatFacts";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CatFacts />} />
        <Route path="/infinite-scrolling" element={<InfinitePosts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
