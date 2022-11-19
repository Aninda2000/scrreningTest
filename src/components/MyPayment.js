import React from "react";

export const MyPayment = () => {
  return (
    <div className="md:flex px-4 my-4 ">
      <div className="w-1/3 mt-9">
        <span className="text-orange-600 text-xl font-medium">
          PAYMENT NAVIGATION
        </span>
        <br />
        <div className="text-lg w-full px-4 my-2 rounded text-white bg-slate-500 my- py-2  font-normal">
          {" "}
          INVOICE
        </div>
        <div className="text-lg w-full px-4 my-2 rounded  bg-cyan-200 my- py-2  font-normal">
          {" "}
          MY BANK DETAILS
        </div>
      </div>
      <div className=" w-full mx-4">
        <div className="h-full px-4  rounded w-full border-2 border-black">
          <p className="text-lg font-normal py-3">
            Payment Date <strong>Oct 25, 2022, 11:07 a.m.</strong> Amount paid{" "}
            <strong>$3150</strong>
          </p>
          <p className="my-2">Payment Made For Project</p>
          <p className="my-2">K10 Maths Text Book Solution</p>
          <p className="my-2">K12 Maths Text Book Solution</p>
        </div>
      </div>
      <div className="w-1/3 text-lg font-medium  -orange-800">
        <p>LifeTime Earning</p>
        <p className="font-bold">$3159</p>
        <p>This months Earning</p>
        <p className="font-bold">$0</p>
      </div>
    </div>
  );
};
