import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <img
        className="h-24"
        src="data:image/jpeg;base64,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"
      />
      <h1 className="font-bold text-lg">Welcome To Digiplus</h1>
      <div className="flex w-10/12 flex-col">
        <div className="flex justify-end">
          <span className="mr-2">Announcements</span>
        </div>
        <div className="bg-cyan-500 flex justify-center py-3 rounded">
          we are working on adding project and intership details{" "}
        </div>
        <div className=" my-3 py-2">
          <span className="text-orange-600 text-xl font-medium">
            work action
          </span>
          <br />
          <div className="text-xl w-fit px-4 my-2 rounded shadow-md shadow-orange-600 my- py-2  font-medium">
            {" "}
            viwe intern data
          </div>
          <span className="text-orange-600 text-xl font-medium">
            interships
          </span>
          <br />
          <div className="text-xl w-fit h-32 px-4 my-2 rounded mt-9 shadow-md shadow-orange-600 my- py-2  font-medium">
            {" "}
            <div className="text-orange-500 pr-6 text-xl ">
              viwe intern data
            </div>
            <div className="text-base mt-3 ">Write solution </div>
          </div>
        </div>
      </div>
    </div>
  );
}
