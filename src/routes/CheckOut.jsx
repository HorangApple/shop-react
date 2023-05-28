import React, { useMemo } from "react";
import useOrders from "../Hooks/useOrders";
import usePrototypes from "../Hooks/usePrototypes";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const navigate = useNavigate();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);
  return (
    <div className={"checkout"}>
      <div className={"header"}>Checkout</div>
      <div className={"body"}>
        {orders.map((order) => {
          const { id } = order;
          const prototype = prototypes.find((p) => p.id === id);
          return (
            <div className={"item"} key={id}>
              <div className={"img"}>
                <video src={prototype.thumbnail} />
              </div>
              <div className={"content"}>
                <p className={"title"}>
                  {prototype.title} x {order.quantity}
                </p>
              </div>
              <div className={"action"}>
                <p className={"price"}>$ {prototype.price * order.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"item"}>
        <div className={"content"}>Total</div>
        <div className={"action"}>
          <div className={"price"}>$ {totalPrice}</div>
        </div>
      </div>
      <div className={"btn__area"}>
        <button className={"btn btn--secondary"}>Payment</button>
        <button
          className={"btn btn--secondary"}
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
