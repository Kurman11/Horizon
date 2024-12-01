import Style from "./style.module.css";
import useCountUp from "../../../../hook/useCount";

export default function ChartPeople(props) {
  return (
    <tr className={Style["chart-card"]}>
      <td>
        <div>
          <img src={props.img} alt="1" /> {props.name}
        </div>
      </td>
      <td>{props.artworks}</td>
      <td>
        <progress value={useCountUp(props.rating)} max="100"></progress>
      </td>
    </tr>
  );
}
