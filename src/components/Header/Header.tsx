import "./Header.css";
import Clown from "../../icons/clown.svg";
// @ts-ignore
import useStore from "../../store";
import { useState } from "react";
import { toast } from "react-toastify";

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

  return (
    <>
      <div className="header__container">
        <div className="header__title">
          <img src={Clown} alt="logo" className="header__logo" />
          gosha
        </div>
        <div className="header__search-container">
          <input
            type="text"
            placeholder="1754"
            className="header__search"
            onChange={(e) => setBranchNumber(e.target.value)}
            value={branchNumber}
          />
          <button className="header__button" onClick={handleBranchOpen}>
            fast go →
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
