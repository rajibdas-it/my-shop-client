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
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStoredOrders(data));
  }, [user?.email]);

  const handleDeleteOrderProduct = (id) => {
    const agreed = window.confirm(
      "Do you really want to delete this item from your order list?"
    );
    if (agreed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item deleted from your order list");
            const remainingOrder = storedOrders.filter((ord) => ord._id !== id);
            setStoredOrders(remainingOrder);
          }
        });
    }
  };

  const handleUpdateOrderProduct = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Confirm your order");
          // fetch(`http://localhost:5000/orders?email=${user?.email}`)
          //   .then((res) => res.json())
          //   .then((data) => setStoredOrders(data));
        }
      });
  };

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
                  handleDeleteOrderProduct={handleDeleteOrderProduct}
                  handleUpdateOrderProduct={handleUpdateOrderProduct}
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
