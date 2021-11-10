import styleModule from "./NavBar.module.css";
import logo from "../../assets/logo/noobLogo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={`${styleModule.navBar}`}>
      {/*<span className={`${styleModule.logoBack}`}></span>
         <img src={logo} alt="logo" width="100px" /> */}
      <span className={`${styleModule.leftSpan}`}>
        <img src={logo} alt="logo" width="100px" />

        <p>اسم شرکت کننده</p>
        <span className={`${styleModule.devider}`}></span>
      </span>
      <span>
        <span className={`${styleModule.devider}`}></span>

        <p>نقشه</p>
        <Link to="scoreBoard">
          <p>رتبه بندی</p>
        </Link>
      </span>
    </div>
  );
}
