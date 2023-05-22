import React, { useState ,useEffect} from "react";
import calenderIcon from "../assets/calendar.png";
import rocketIcon from "../assets/Rocket2.png";
import messagesNotificationIcon from "../assets/messagesNotification.png";
const RecentActivity = (params) => {
  const [cardsData, setCardsData] = useState(data);

    
const [testing, setTesting ]  = useState([]);


       console.log(testing, "testing recent activity data");

      useEffect(() => {
    const url ='http://51.159.11.53:9999/v1/community/recent-widget/public/get?communityId='+ params.community.communityId;
          // console.log("comunity Data", params.community)
    fetch(
      url,
      {
        headers: {
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImFjdGl2ZSI6dHJ1ZSwiaXNfYm90IjpmYWxzZSwiaWF0IjoxNjc4MDk0MjY1LCJleHAiOjE2NzkzMDM4NjV9.TJXSHw0WgUliy92-VI6rphY1h0YOZWN_M-eUOMhh_fA`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCardsData(data);
        setTesting(data)
        console.log(data);
        console.log(data.length)
        if(data.length >= 3){
          setLoading(false);

        }
      })

      .catch((error) => console.log(error));
   }, [])
   

  return (
    <div className="p-5 md:p-14 rounded-2xl bg-white mt-8 md:mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-5">
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          <div className="">
            <h1 className="font-bold text-base  md:text-3xl lg:mb-14 mb-5 flex items-center space-x-5">
              <span className="">Recent Activity</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </h1>

            <p className="textLightGray text-sm md:text-xl ">
            Stay engaged our active Community! Discover dynamic discussions, interactive exchange, and exciting events in our recent activity feed.
            </p>
          </div>

          <button style={{backgroundColor:params.colors}} className=" items-center justify-center px-[15px]    min-w-[13rem] text-white font-bold text-xl w-96 rounded-full py-5 hidden lg:flex">
            <div className="flex items-center justify-center space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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

        <div className="space-y-5 w-full">
          {cardsData.map((elem, index) => {
            return (
              <div
                className="bgColor p-4 md:p-7 rounded-2xl flex items-center  space-x-5"
                key={index}
              >
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-2xl">
                  <img src={elem.media1} alt="" className="" />
                </div>
                <div className=" md:space-y-2">
                  <p className="text-[15px] md:text-2xl font-semibold textDarkGray">
                    {elem.title}
                  </p>
                  <p className="textLightGray text-[14px] md:text-xl">
                    {elem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    icon: calenderIcon,
    title: "23 Events/Posts Scheduled",
    desc: "Nasdax Community",
  },
  {
    icon: rocketIcon,
    title: "37347 Recent Messages",
    desc: "Discussions ",
  },
  {
    icon: messagesNotificationIcon,
    title: "37347 Messages Last Week",
    desc: "Community",
  },
];
export default RecentActivity;
