import Style from "./style.module.css";
import Seach from "../Seach/Seach";
const Header = ({ title, litleTitle }) => {

  return (
    <header className={Style["main-header"]}>
      <div className={Style["haeder-breadcrumb"]}>
        <div>{litleTitle}</div>
        <h2>{title}</h2>
      </div>
      <Seach/>
    </header>
  );
};

export default Header;
