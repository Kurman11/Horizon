import { useState, useRef } from "react";
import SubHeader from "./SubHeader/SubHeader";
import NFTcard from "./NFTcard/NFTcard.jsx";
import GropImage from "./image/Group.png";
import Mock from "./mock/dummy.js";

export default function NFTMarketplacePage() {
  const [tab, setTab] = useState("Art");
  const arr = useRef(Mock);

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
    <section className="section">
      <SubHeader tabArr={btnArr} handleTab={handleTab} />
      <div>
        {data.map(({ title, name, bit, img, isGood, id }) => (
          <div key={id}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
