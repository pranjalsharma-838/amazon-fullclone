import React from "react";
import "./Order.css";
import CheckProduct from "./CheckProduct";
import moment from "moment";
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((ele, i) => (
        <CheckProduct
          key={i}
          id={ele.id}
          title={ele.title}
          price={ele.price}
          image={ele.image}
          rating={ele.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
      renderText={(value)=><h3>Order Total:{value}</h3>}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
