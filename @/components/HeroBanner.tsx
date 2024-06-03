import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5 ">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best Website to</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Shop Electronics.",
                "Shop Clothes.",
                "Shop Furniture.",
                "Shop Shoes.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Buy products easier.
      </div>
      <div>
        <Button
          variant={"premium"}
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </Button>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

export default HeroBanner;