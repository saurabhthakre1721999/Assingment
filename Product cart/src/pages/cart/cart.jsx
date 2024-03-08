import { useContext } from "react";
import CartDetail from "../../componets/cartdetail/cartdetail";

import { ContextApi } from "../../context/context";

const Cart = () => {
  const { cart, count, setCount } = useContext(ContextApi);
  return (
    <div>
      {" "}
      {cart.length === 0 ? (
        <div>cart is empty</div>
      ) : (
        cart.map((items) => {
          return <CartDetail items={items} count={count} setCount={setCount} />;
        })
      )}
    </div>
  );
};
export default Cart;
