import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import MenuArr from "./menu";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className={style.sideMenu}>
      <h1 className={style.logo}><img src="image/Logo.png" alt="Logo" /></h1>
      <nav className={style.menuArea}>
        <ul className={style.menu}>
          {MenuArr.map(({ title, to, src, alt }, index) => {
            return (
              <li className={style.menuItem} key={index}>
                <Link className={pathname === to || (pathname === '/' && to === '/Main') ? style.on : ""} to={to}>
                  <img src={src} alt={alt} />
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={style.memnuBottom}>
        <Link to="/Main">
          <img
            className={style.bottomimg}
            src="image/Vector1.png"
            alt="CTA"
          />
        </Link>
      </div>
    </div>
  );
}

