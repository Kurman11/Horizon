import Style from "./style.module.css";
import { useState, useRef } from "react";
import SubHeader from "./SubHeader/SubHeader";
import NFTcard from "./NFTcard/NFTcard.jsx";
import GropImage from "./image/Group.png";
import Mock from "./mock/dummy.js";
import Chart from "./chart/Chart.jsx";

export default function NFTMarketplacePage() {
  const [tab, setTab] = useState("Art");
  const arr = useRef(Mock);
  const [button, setButton] = useState("discover");

  const handClick = (buttonType) => {
    setButton(buttonType);
  };
  // const [items, setItems] = useState(MockItems.filter((item) => item.type === "Art"));
  // const [mockData] = useState(MockItems)
  // console.log(order)

  const btnArr = [
    { title: "Art" },
    { title: "Music" },
    { title: "Collectibles" },
    { title: "Sports" },
  ];

  const handleTab = (value) => {
    setTab(value);
  };
  const handleGood = (id) => {
    arr.current[id].isGood = !arr.current[id].isGood;
  };

  const data = arr.current.filter((value) => value.type === tab);

  return (
    <section className={`section ${Style["section-flex"]}`}>
      <div className={Style.container}>
        <div className={Style["advertisement"]}>
          <div className={Style["advertisement-div"]}>
            <h2 className={Style["advertisement-text"]}>
              DisCover, collect, and <br />
              sell extraordinary NFTs
            </h2>
            <div className={Style["advertisement-sub-text"]}>
              Enter in this creative world, Discover now the <br /> latest NFTs
              or start creating your own!
            </div>
            <div>
              <button
                type="button"
                className={button === "discover" ? Style["on"] : ""}
                onClick={() => handClick("discover")}
              >
                Discover now
              </button>
              <button
                type="button"
                className={button === "watch" ? Style["on"] : ""}
                onClick={() => handClick("watch")}
              >
                Watch video
              </button>
            </div>
          </div>
        </div>
        <SubHeader tabArr={btnArr} handleTab={handleTab} />
        <ul className={Style["card-area"]}>
          {data.map(({ title, name, bit, img, isGood, id }) => (
            <li key={id}>
              <NFTcard
                mainImg={img}
                alt="sub메인 이미지"
                firstText={title}
                peopleimg={GropImage}
                isGood={isGood}
                firstTextSub={name}
                secondTextSub={`Current Bid: ${bit}`}
                handleGood={handleGood}
                id={id}
              />
            </li>
          ))}
        </ul>
      </div>
      <Chart title={"History"} />
    </section>
  );
}
