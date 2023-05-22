import React, { useState,useEffect } from "react";
import lockImg1 from "../assets/lockImg1.svg";
import lockImg2 from "../assets/lockImg2.svg";
import lockImg3 from "../assets/lockImg3.svg";
import announcementIcon from "../assets/Megaphone.png";
import lockIcon from "../assets/lockDark.svg";
import lockIcon2 from "../assets/lock_24px.svg";
import userIcon from "../assets/businessman icon-png 1.png";

import blur1 from "../assets/avatar1.png";
import blur2 from "../assets/avatar2.png";
import blur3 from "../assets/avatar3.png";

const ExclusiveAccess = (params) => {
  const [cardsData, setCardsData] = useState(data);

  const [desc, setData] = useState({});
  const [loading1, setLoading1] = useState(true);
  const [loading, setLoading] = useState(true);

  console.log("checking number tow" , cardsData)

  useEffect(() => {
    fetch(
      "http://51.159.11.53:9999/v1/community/access-widget/public/get?communityId="+ params.community.communityId,
      {
        headers: {
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImFjdGl2ZSI6dHJ1ZSwiaXNfYm90IjpmYWxzZSwiaWF0IjoxNjc4MDk0MjY1LCJleHAiOjE2NzkzMDM4NjV9.TJXSHw0WgUliy92-VI6rphY1h0YOZWN_M-eUOMhh_fA`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCardsData(data);
        console.log(data);
        if(data.length >= 3){
          setLoading1(false);
        }
      })

      .catch((error) => console.log(error));

    
    
        const url ='http://51.159.11.53:9999/v1/community/page-widget/public/get?communityId=' + params.community.communityId;
    
        fetch(
        url ,
          {
            headers: {
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            console.log(data.title);
            console.log(data);
            setLoading(false);
          })
    
          .catch((error) => console.log(error));
        //  console.log(data);
  }, [])
  
  return (
    <>
    { loading1 ? <div></div>:
      <div className="p-5 md:p-14 rounded-2xl bg-white mt-8 md:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5  md:gap-x-20 md:gap-y-10 ">
          <div className="">
            <h1 className="font-bold text-base  md:text-3xl lg:mb-14 mb-5 ">
              <span className="">Exclusive Access To</span>
            </h1>

            <div className="space-y-5 md:space-y-10">
              {cardsData.map((elem, index) => {
                return (
                  <div
                    className="bgColor p-4 md:bg-white md:p-0 rounded-2xl flex items-center  justify-between "
                    key={index}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-white w-14 h-14 flex items-center justify-center rounded-2xl">
                        <img src={elem.media1} alt="" className="" />
                      </div>
                      <div className="md:space-y-2">
                        <p className="text-[15px] md:text-2xl font-semibold textDarkGray">
                          {elem.title}
                        </p>
                        <p className="textLightGray text-[14px] md:text-xl">
                          {elem.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex -space-x-4">
                      <img
                        className="w-7 h-7 md:w-10 md:h-10 border-2 border-white rounded-full "
                        src={blur1}
                        alt=""
                      />
                      <img
                        className="w-7 h-7 md:w-10 md:h-10 border-2 border-white  rounded-full "
                        src={blur2}
                        alt=""
                      />
                      <img
                        className="w-7 h-7 md:w-10 md:h-10 border-2 border-white  rounded-full "
                        src={blur3}
                        alt=""
                      />
                      <a
                        className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 text-xs font-medium text-white bg-blue-500 border-2 border-white rounded-full hover:bg-gray-600"
                        href="#"
                      >
                        50+
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block space-y-5">
            <h1 className="font-bold text-lg md:text-3xl lg:mb-14 flex items-center space-x-2 md:space-x-8">
              <span className="">Enjoy our Exclusive Content</span>
              <img src={lockIcon} alt="" className="w-4 md:w-5" />
            </h1>

            <div className="grid grid-cols-2 gap-4 h-96    ">
              <div className="bg-gray-200  col-span-2 relative overflow-hidden rounded-[22px] w-full  h-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                  <img
                    src={lockIcon2}
                    alt=""
                    className=" w-4 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                  />
                </div>
                <img src={desc.media1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-300 h-full relative overflow-hidden rounded-[22px]">
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                  <img
                    src={lockIcon2}
                    alt=""
                    className=" w-4 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                  />
                </div>
                <img src={desc.media2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-400 h-full relative overflow-hidden rounded-[22px]">
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                  <img
                    src={lockIcon2}
                    alt=""
                    className=" w-4 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                  />
                </div>
                <img src={lockImg3} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>}
      {loading ? <div></div>:

      <div className="p-5 md:p-14 rounded-2xl bg-white mt-8 md:mt-14 md:hidden">
        <div className="space-y-5">
          <h1 className="font-bold text-lg md:text-3xl lg:mb-14 flex items-center space-x-4 md:space-x-8">
            <span className="">{desc.title}</span>
            <img src={lockIcon} alt="" className="w-4 md:w-8" />
          </h1>

          <div className="grid grid-cols-2 gap-4 h-96   md:hidden ">
            <div className="bg-gray-200  col-span-2 relative overflow-hidden rounded-[22px] w-full  h-full">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                <img
                  src={lockIcon2}
                  alt=""
                  className=" w-6 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                />
              </div>
              <img src={desc.media1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-300 h-full relative overflow-hidden rounded-[22px]">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                <img
                  src={lockIcon2}
                  alt=""
                  className=" w-6 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                />
              </div>
              <img src={desc.media2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-400 h-full relative overflow-hidden rounded-[22px]">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-lg ">
                <img
                  src={lockIcon2}
                  alt=""
                  className=" w-6 md:w-8 absolute top-0 right-0 bottom-0 left-0 m-auto "
                />
              </div>
              <img src={lockImg3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

const data = [
  {
    icon: announcementIcon,
    title: "Pre Announcements",
    desc: "Community",
  },
  {
    icon: lockIcon,
    title: "Private Channels",
    desc: "#Channels ",
  },
  {
    icon: userIcon,
    title: "Dedicated Admins",
    desc: "Community",
  },
  {
    icon: userIcon,
    title: "Dedicated Admins",
    desc: "Community",
  },
];
export default ExclusiveAccess;
