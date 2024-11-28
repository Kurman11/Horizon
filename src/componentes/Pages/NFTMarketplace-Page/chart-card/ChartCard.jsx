import Style from "./style.module.css";

export default function ChartCard(props) {
  return (
    <div className={Style["figure-chart"]}>
      <img className={Style["main-img"]} src={props.img} alt={props.alt} />
      <div className={Style["main-content"]}>
        <div className={Style["title-div"]}>
          <div className={Style["main-title"]}>{props.title}</div>
          <div className={Style["sub-title"]}>{props.subtitle}</div>
        </div>
        <div className={Style["eth-div"]}>
          <img
            className={Style["eth-img"]}
            src={props.ETHimg}
            alt={props.ETHAlt}
          />
          <div className={Style["eth-font"]}>{props.bit}</div>
        </div>
        <div className={Style["ago-font"]}>30s ago</div>
      </div>
    </div>
  );
}
