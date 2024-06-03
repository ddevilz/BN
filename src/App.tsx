import "./App.css";
import Navbar from "../@/components/Navbar";
import HeroBanner from "../@/components/HeroBanner";

function App() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-purple-950 text-white h-screen ">
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default App;
