import React from "react";

const Checkout = () => {
  const handleForm = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };
  return (
    <div className="min-h-screen justify-center items-center mx-auto p-4 bg-green-100 leading-loose">
      <form onClick={handleForm} className="max-w-lg m-4 p-4 bg-white rounded shadow-xl">
        <p className="text-gray-800 font-medium">Customer information</p>
        <div className>
          <label className="block text-sm text-gray-600" htmlFor="cus_name">
            Name
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Email
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="cus_email">
            Address
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">
            City
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">
            Country
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">
            Zip
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
        <div className>
          <label className="block text-sm text-gray-600" htmlFor="cus_name">
            Card
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required
            placeholder="Card Number MM/YY CVC"
            aria-label="Name"
          />
        </div>
        <div className="mt-4">
          <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
