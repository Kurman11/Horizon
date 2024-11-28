import Style from "./style.module.css";
import ChartCard from "../chart-card/ChartCard";

import Mock from "../mock/dummy.js";
import ETH from "../image/ETHIcon.png";

export default function Chart(props) {
  const data = Mock.slice(0, 6);

  return (
    <section className={Style["section"]}>
      <div className={Style["chart-div"]}>
        <h2>{props.title}</h2>
        <button type="button">See all</button>
      </div>
      <ul className={Style["second-chart"]}>
        {data.map(({ title, name, bit, img }) => (
          <li key={title}>
            <ChartCard
              img={img}
              title={title}
              subtitle={name}
              ETHimg={ETH}
              ETHAlt={"ETH이미지"}
              bit={bit}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
