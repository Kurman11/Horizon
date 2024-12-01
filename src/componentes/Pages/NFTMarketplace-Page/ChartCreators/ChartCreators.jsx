import Style from "./style.module.css";
import ChartTop from "../ChartTop/ChartTop";
import ChartPeople from "../ChartPeople/ChartPeople";
import Mock from "../mock/CardDummy";
export default function ChartCreators() {
  const data = Mock;

  return (
    <section className={Style["section"]}>
      <ChartTop title={"Top Creators"} />
      <table>
        <caption className="">탑내용</caption>
        <colgroup>
          <col col="40%" />
          <col col="30%" />
          <col col="30%" />
        </colgroup>
        <thead>
          <tr className={Style["chart-tr"]}>
            <th>Name</th>
            <th>Artworks</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, img, artworks, rating }, index) => (
            <ChartPeople
              key={index}
              img={img}
              name={name}
              artworks={artworks}
              rating={rating}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
