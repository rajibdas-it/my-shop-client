import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [storedOrders, setStoredOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setStoredOrders(data));
  }, [user?.email]);

  return (
    <div className="w-[80%] mx-auto">
      <div className="text-2xl text-center my-5">
        <h1>Your Orders List</h1>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product Details</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {storedOrders.map((order, index) => (
                <OrderDetails
                  key={order._id}
                  order={order}
                  index={index}
                ></OrderDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
