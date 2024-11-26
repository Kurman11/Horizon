import { useState } from "react";
import Style from "./style.module.css";

export default function NFTcard(props) {
  const { isGood, handleGood, id } = props;
  const [isActive, setIsActive] = useState(isGood);
  const handleClick = () => {
    setIsActive(!isActive);
    handleGood(id);
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
