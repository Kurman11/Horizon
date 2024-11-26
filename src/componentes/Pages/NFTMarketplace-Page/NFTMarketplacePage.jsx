import { useState } from "react";
import SubHeader from "./SubHeader/SubHeader";
import NFTcard from "./NFTcard/NFTcard.jsx";
// import cardImage from "./image/Card.png";
import GropImage from "./image/Group.png";
import MockItems from './mock/dummy.js'


export default function NFTMarketplacePage() {
  // const [tab, setTab] = useState("Art");
  const [order, setItems] = useState(MockItems.filter((item) => item.type === "Art"));
  const [mockData] = useState(MockItems)
  // console.log(order)

  const btnArr = [
    {title: "Art"},
    {title: "Music"},
    {title: "Collectibles"},
    {title: "Sports"},
  ];

  const handleTab = (value) => {
    const typeFilter = mockData.filter((od) => od.type === value)
    setItems(typeFilter);
  };

  const renderTab = () => {
    return order.map(({ title, name, bit, img, isGood }, index) => (
      <div key={index}>
        <NFTcard
          mainImg= {img}
          alt="sub메인 이미지"
          firstText={title}
          peopleimg={GropImage}
          peopleimgAlt={isGood}
          firstTextSub={name}
          secondTextSub={`Current Bid: ${bit}`}
        />
      </div>
    ));
  };
  return (
    <section className="section">
        <SubHeader tabArr={btnArr} handleTab={handleTab} />
        <div>{renderTab()}</div>
    </section>
  );
}
