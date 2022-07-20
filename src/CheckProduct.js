import React from "react";
import "./CheckProduct.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function CheckProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () =>
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />

      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="checkout_product_info">
              <p className="checkout_product_title">{title}</p>

              <p className="checkout_product_price">
                <strong>{value}</strong>
              </p>

              <div className="checkout_product_rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}> ⭐ </p>
                  ))}
              </div>
              {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>
            }
            </div>
          </>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default CheckProduct;
