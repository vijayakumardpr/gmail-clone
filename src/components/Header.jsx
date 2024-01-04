import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { useContext, useState } from "react";
import { ToggleContext } from "../context/ToggleContext";

const Header = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const [txt, setTxt] = useState("");

  return (
    <>
      <nav className="header-navbar row space-between">
        <div className="row align-item gap-10">
          <div onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </div>
          <img
            style={{ width: "100px" }}
            src="https://freelogopng.com/images/all_img/1682570982gmail-name-logo.png"
            alt="gmail-logo"
          />
        </div>
        <div className="searchbar row align-item">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search mail"
            value={txt}
            onChange={(e) => {
              setTxt(e.target.value);
            }}
          />
        </div>
        <div className="row align-item gap-10">
          <HelpOutlineRoundedIcon />
          <SettingsRoundedIcon />
          <AppsRoundedIcon />
          <div className="avatar row align-item h-center">v</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
