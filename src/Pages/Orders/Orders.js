import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);
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
                <th>Customer Name</th>
                <th>Product Details</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td className="flex gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </div>
                </td>
                <td>Purple</td>
                <th className="flex gap-2">
                  <button className="btn btn-outline btn-success">
                    Confirm
                  </button>
                  <button className="btn btn-error">Delete</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
