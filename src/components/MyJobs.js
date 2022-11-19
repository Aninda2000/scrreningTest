import React from "react";

export const MyJobs = () => {
  return (
    <div className="md:flex px-4 my-4 ">
      <div className="w-1/3">
        <span className="text-orange-600 text-xl font-medium">JOB</span>
        <br />
        <div className="text-xl w-fit px-4 my-2 rounded  bg-cyan-200 my- py-2  font-medium">
          {" "}
          Solution Writing
        </div>
        <span className="text-orange-600 text-xl font-medium">
          FOR JOB APPLICATION
        </span>
        <br />
        <div className="text-xl w-fit px-4 my-2 rounded text-white  bg-slate-600 my- py-2  font-medium">
          {" "}
          SCREENING TASKS
        </div>
        <span className="text-orange-600 text-xl font-medium">
          APPLICATION STATUS
        </span>
        <br />
        <div className="text-xl w-fit px-4 my-2 rounded  bg-cyan-200 my- py-2  font-medium">
          {" "}
          APPLICATION STATUS JOB
        </div>
      </div>
      <div className=" w-full">
        <div className="h-32 px-4 mx-4 shadow-lg shadow-orange-500 rounded w-fit">
          <p className="text-lg font-normal py-3">
            {" "}
            K10 MATHS TEXT BOOK SOLUTION
          </p>
          <span>intern Digiplus</span>
        </div>
      </div>
      <div className="w-1/3   -orange-800">
        <div className="w-full flex justify-center font-semibold">
          {" "}
          Announcements
        </div>
        <div className="bg-sky-200 h-32 rounded p-3">
          we are working on aadiing project and intership details so just fill
          up profile only
        </div>
      </div>
    </div>
  );
};
