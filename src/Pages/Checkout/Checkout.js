import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const product = useLoaderData();
  const { _id, name, price, img } = product;
  return (
    <div>
      <div className="text-2xl flex flex-col justify-center items-center gap-2">
        <h1>Checkout of {name}</h1>
        <p>Price: ${price}</p>
        <img className="h-24 w-24" src={img} alt="" />
      </div>
      <div className="w-[80%] mx-auto my-10">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              // placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-32"
            name="message"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="btn btn-info mt-4">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
