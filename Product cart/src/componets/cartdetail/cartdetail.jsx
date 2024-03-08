const CartDetail = ({ items, count, setCount }) => {
  console.log(" items dkdkdk", items);
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={items.image}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
        <span>{items.title}</span>
        <span>
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </span>
      </div>
    </>
  );
};
export default CartDetail;
