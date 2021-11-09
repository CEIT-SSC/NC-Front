import styleModule from "./NavBar.module.css";
import logo from "../../assets/logo/noobLogo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={`${styleModule.navBar}`}>
      <span>
        <img src={logo} alt="logo" width="55px" />
        <span>اسم شرکت کننده</span>
        <span className={`${styleModule.devider}`}>.</span>
      </span>
      <span>
        <span className={`${styleModule.devider}`}>.</span>
        <Link to="scoreBoard">رتبه بندی</Link>
      </span>
    </div>
  );
}
