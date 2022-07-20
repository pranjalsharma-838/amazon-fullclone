import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
import Loading from "./Loading";
function Orders() {
  const [orders, setOrders] = useState();
  const [{ user }] = useStateValue();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
    setLoad(false);
  }, [user]);

  return (
    <div className="orders">
      <h2> Your Orders</h2>
      {load ? (
        <Loading />
      ) : (
        <div className="OrdersOrder">
          {orders?.map((order, i) => (
            <Order key={i} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
