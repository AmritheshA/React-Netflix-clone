import React from "react";
import RowSkelton from "./RowSkelton";
import { FooterSkeleton } from "./FooterSkeleton";

function Skeleton() {
  return (
    <>
      <div className="animate-pulse bg-gray-800 w-full h-[650px] text-white relative">
        <div className="w-full h-full">
          <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>

          {/* Loading skeleton for image */}
          <div className="h-full w-full bg-gray-700"></div>

          <div className="absolute w-full top-[30%] p-4 md:p-8 text-gray-700">
            {/* Loading skeleton for title */}
            <div className="text-3xl md:text-5xl w-40 font-bold h-4 bg-gray-700 mb-4"></div>

            <div className="my-4">
              {/* Loading skeleton for buttons */}
              <div className="flex space-x-4">
                <div className="h-8 w-16 rounded bg-gray-700"></div>
                <div className="h-8 w-24 rounded bg-gray-700"></div>
              </div>
            </div>

            {/* Loading skeleton for release date */}
            <div className="text-sm h-4 w-20 bg-gray-700 mt-4"></div>

            {/* Loading skeleton for overview text */}
            <div className="mt-4 text-gray-200 h-2 w-[25%] bg-gray-700"></div>
            <div className="mt-2 text-gray-200 h-2 w-[25%] bg-gray-700"></div>
            <div className="mt-2 text-gray-200 h-2 w-[25%] bg-gray-700"></div>
            <div className="mt-2 text-gray-200 h-2 w-[20%] bg-gray-700"></div>
          </div>
        </div>
      </div>
      <RowSkelton />
      <RowSkelton />
      <RowSkelton />
      <RowSkelton />
      <FooterSkeleton/>
    </>
  );
}

export default Skeleton;
