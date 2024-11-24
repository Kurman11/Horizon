import Style from "./style.module.css";
import { useState } from "react";

export default function Main(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <figure>
      <div className={Style["nft-img-box"]}>
        <img
          className={Style["img-size"]}
          src={props.mainImg}
          alt={props.alt}
        />
        <button
          type="button"
          className={isActive ? Style["on"] : ""}
          onClick={handleClick}
        >
          ♡
        </button>
      </div>
      <div className={Style["nft-text-box"]}>
        <div>
          <h3 className="ellipsis" title={props.firstText}>
            {props.firstText}
          </h3>
          <p className="ellipsis" title={props.firstTextSub}>
            {props.firstTextSub}
          </p>
        </div>
        <img src={props.peopleimg} alt={props.peopleimgAlAlt} />
      </div>
      <div className={Style["nft-second-font"]}>
        <div className={Style["nft-second-subfont"]}>{props.secondTextSub}</div>
        <button type="button">Place Bid</button>
      </div>
    </figure>
  );
}
