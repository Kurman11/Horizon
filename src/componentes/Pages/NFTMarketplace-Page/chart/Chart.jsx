import Style from "./style.module.css";
import ChartCard from "../chart-card/ChartCard";
import ChartTop from "../ChartTop/ChartTop.jsx";
import Mock from "../mock/dummy.js";
import ETH from "../image/ETHIcon.png";

export default function Chart(props) {
  const data = Mock.slice(0, 6);

  return (
    <section className={Style["section"]}>
      <ChartTop title={"Top Creatpors"} />
      <ul className={Style["second-chart"]}>
        {data.map(({ title, name, bit, img, id }) => (
          <li key={id}>
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
