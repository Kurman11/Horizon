import Style from "./style.module.css";

export default function SubHeader({ tabArr, handleTab }) {
  const handleClick = (value) => {
    handleTab(value);
  };

  return (
    <div className={Style["sub-header"]}>
      <div className={Style["sub-font"]}>Trending NFTs</div>
      {tabArr && (
        <ul>
          {tabArr.map(({ title }, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(title);
                  }}
                >
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
