import React from "react";

function RowSkelton() {
  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl">
        <div className="animate-pulse bg-gray-700 w-[10%] h-6"></div>
      </h2>
      <div className="relative flex items-center group">
        <div className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block">
          <div className="animate-pulse w-10 h-10 rounded-full bg-gray-700"></div>
        </div>

        <div
          id={"slider"}
          className="flex overflow-x-scroll whitespace-normal scroll-smooth scrollbar-hide relative w-full"
        >
          {/* Loading skeleton for movie items */}
          {[...Array(8).keys()].map((index) => (
            <div key={index} className="p-2">
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-1 relative shrink-0">
                
                <div className="animate-pulse w-full h-[100px] bg-gray-700"></div>

                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center  h-[100px] text-center">
                    <div className="animate-pulse h-2 w-16 bg-gray-700"></div>
                  </p>
                  <p>
                    <div className="absolute top-4 left-4">
                      <div className="animate-pulse w-4 h-4 bg-gray-700 rounded-full"></div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block">
          <div className="animate-pulse w-10 h-10 rounded-full bg-gray-700"></div>
        </div>
      </div>
    </>
  );
}

export default RowSkelton;
