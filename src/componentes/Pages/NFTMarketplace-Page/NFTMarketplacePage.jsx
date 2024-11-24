import { useState } from "react";

import SubHeader from "./SubHeader/SubHeader";

import NFTcard from "./NFTcard/NFTcard.jsx";
import cardImage from "./image/Card.png";
import GropImage from "./image/Group.png";

export default function NFTMarketplacePage() {
  const [tab, setTab] = useState("Art");

  const btnArr = [
    {
      title: "Art",
    },
    {
      title: "Music",
    },
    {
      title: "Collectibles",
    },
    {
      title: "Sports",
    },
  ];

  const handleTab = (value) => {
    setTab(value);
  };

  const renderTab = () => {
    switch (tab) {
      case "Art":
      default: {
        return (
          <div>
            <NFTcard
              mainImg={cardImage}
              alt="sub메인 이미지"
              firstText="Abstract Colors"
              peopleimg={GropImage}
              peopleimgAlAlt="좋아요누른 사람들"
              firstTextSub="By Esthera Jackson"
              secondTextSub="Current Bid : 0.91ETH"
            />
          </div>
        );
      }
      case "Music": {
        return <div>Music</div>;
      }
      case "Collectibles": {
        return <div>Collectibles</div>;
      }
      case "Sports": {
        return <div>Sports</div>;
      }
    }
  };
  return (
    <section className="section">
      <SubHeader tabArr={btnArr} handleTab={handleTab} />
      {renderTab()}
    </section>
  );
}
