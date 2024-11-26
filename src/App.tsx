import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CatFacts from "./pages/CatFacts";

export default function App() {
  return (
    <div className="min-h-screen fixed-background w-full">
      <div className="flex justify-center items-start py-8 min-h-screen">
        <div className="w-full max-w-xl bg-[#f7f7f7] min-h-screen">
          <CatFacts />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
