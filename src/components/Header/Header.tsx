import "./Header.css";
import Clown from "../../icons/clown.svg";
import useStore from "../../store";
import { useState } from "react";
import { toast } from "react-toastify";
import { HEADER_CONFIG } from "../../constants";

const Header = () => {
  const { baseUrl, openSettings } = useStore((state: any) => state);
  const [branchNumber, setBranchNumber] = useState("");

  const handleBranchOpen = () => {
    if (!baseUrl) {
      toast.error("Please set base url", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      openSettings();
      return;
    }
    if (!branchNumber) {
      toast.error("Please set branch number", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    window.open(baseUrl.replace("{{branchNumber}}", branchNumber), "_blank");
  };

  const handleSearch = (e: any) => {
    setBranchNumber(e.target.value);
  };

  return (
    <>
      <div className="header__container">
        <div className="header__title">
          <img src={Clown} alt="logo" className="header__logo" />
          {HEADER_CONFIG.title}
        </div>
        <div className="header__search-container">
          <input
            type="text"
            placeholder={HEADER_CONFIG.searchPlaceholder}
            className="header__search"
            onChange={handleSearch}
            value={branchNumber}
          />
          <button className="header__button" onClick={handleBranchOpen}>
            {HEADER_CONFIG.fastButtonText}
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
