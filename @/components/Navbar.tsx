import Container from "./Container";
import Cart from "./Cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState<boolean>();
  const navigate = useNavigate();

  const openSearch = () => {
    setShowSearch(true);
  };

  const navigationHandler = (type: string) => {
    if (type === "shop") {
      navigate("/shop");
    } else {
      navigate("/");
    }
    setShowSearch(false);
  };

  const searchQueryHandler = (event: {
    preventDefault: () => void;
    key: string;
  }) => {
    event.preventDefault();
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/shop?q=${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <nav className="w-full h-16 flex justify-between items-center">
        <div>
          <span
            onClick={() => navigationHandler("home")}
            className="font-bold text-4xl cursor-pointer"
          >
            LOGO
          </span>
        </div>
        <div>
          <ul className="flex gap-6 items-center cursor-pointer">
            <li
              className={"font-medium text-[18px] hidden md:inline-block"}
              onClick={() => navigationHandler("home")}
            >
              Home
            </li>
            <li
              className="font-medium text-[18px] hidden md:inline-block"
              onClick={() => navigationHandler("shop")}
            >
              Shop
            </li>
            <li className="font-medium text-[18px]">
              <Search onClick={openSearch} />
            </li>
            <li className="font-medium text-[18px]">
              <Cart />
            </li>
          </ul>
        </div>
        {showSearch && (
          <div className="w-full h-[60px]  absolute animate-[mobileMenu_0.3s_ease_forwards] top-[60px] left-[12px] ">
            <Container>
              <div className="flex items-center h-10 w-full mt-2.5">
                <Input
                  type="text"
                  placeholder="Search for a product..."
                  value={query}
                  className="w-full h-[50px] text-black bg-[white] text-sm px-[15px] py-0 rounded-[30px_0_0_30px] border-0 z-50"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                />
                <X
                  className="text-xl  shrink-0 cursor-pointer ml-2.5 z-50"
                  onClick={() => setShowSearch(false)}
                />
              </div>
            </Container>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
