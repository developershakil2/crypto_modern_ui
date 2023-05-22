import React ,{ useState,useEffect} from "react";

const CTA = (params) => {
 

  return (
    <div className=" p-6 pt-14 md:p-24 rounded-3xl md:rounded-2xl bg-white mt-8 md:mt-14 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-9 lg:space-y-0">
      <div className="">
        <h1 className="font-bold text-[20px] md:text-[40px] pb-2">
          Join in our Community
        </h1>
        <p className="textLightGray text-[15px] font-medium w-[80%] mx-auto md:mx-0 md:px-0 md:text-xl md:w-[25rem]">
          Receive latest news, updates and many other things every week
        </p>
      </div>

      <button 
      style={{backgroundColor:params.colors}}

      onClick={(e) => {
        e.preventDefault();
        window.location.href=params.community.link;
        }}
      className=" items-center justify-center px-[15px]    md:min-w-[13rem] text-white font-semibold text-[15px] md:text-xl w-full md:w-96 rounded-2xl py-3 md:py-5 flex">
        <div className="flex items-center justify-center space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6  md:h-6"
          > 
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>

          <span className="capitalize"> join Community</span>
        </div>
      </button>
    </div>
  );
};

export default CTA;
