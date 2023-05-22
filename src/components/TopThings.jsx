import React, { useState,useEffect } from "react";
import handShakeIcon from "../assets/handShake.png";
import rocketIcon from "../assets/rocket.png";
import laptopIcon from "../assets/laptop.png";
const TopThings = (params) => {

  const [things, topthings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [topThing, setTopThing] = useState({});

        const [testing , setTesting] = useState({});
        console.log(testing, "testing top THINg to do")
  useEffect(() => {
    const url ='http://51.159.11.53:9999/v1/community/description/public/' + params.community.communityId;

  fetch(url , {
      // method: 'GET',
      headers: {
        // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImFjdGl2ZSI6dHJ1ZSwiaXNfYm90IjpmYWxzZSwiaWF0IjoxNjc4MDk0MjY1LCJleHAiOjE2NzkzMDM4NjV9.TJXSHw0WgUliy92-VI6rphY1h0YOZWN_M-eUOMhh_fA`
      },
      // body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then((data)=> {
      setTopThing(data)
      setTesting(data);
      for (let i = 0; i < data.descriptions.length; i++) {

           for (let x = 0; x < data.groups.length; x++) {
              if(data.descriptions[i].groupChannelId === data.groups[x].id){
                if(things.length <= 3)
                  things.push({desc:data.descriptions[i].title,"title":data.groups[x].name,"icon":rocketIcon})
              }  
           }
           for (let x = 0; x < data.channels.length; x++) {
            if(data.descriptions[i].groupChannelId === data.channels[x].id){
              if(things.length <= 3)
                things.push({desc:data.descriptions[i].title,title:data.groups[x].name,"icon":laptopIcon})
            }  
         }
        
      }
      setLoading(false);
    })
      
    .catch(error => console.log(error));
  //  console.log(data);
  },[]);
  return (
 
    loading ?  <div className="p-5 md:p-14 rounded-2xl bg-white mt-8 md:mt-14">
      <h1 className="font-bold text-base  md:text-3xl lg:mb-14 mb-5 ">
        Top Things to do here
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {topThing.descriptions && topThing.descriptions.map((elem, index) => {
          return (
            <div className="bgColor  space-x-5 md:space-x-0 p-4 md:px-[30px] md:py-[51px] flex md:block items-center rounded-2xl md:space-y-8">
              <div
                className="bg-white w-14 h-14 md:p-3 md:w-20 md:h-20 flex items-center justify-center rounded-2xl"
                key={index}
              >
               
                {/* <img src={elem.icon}  alt="icon"   className="w-[26px] h-[26px] md:w-full md:h-full"/> */}
                  <p>{elem.emoji}</p>
                
              </div>
              <div className="md:space-y-2">
                <p className="text-[15px] md:text-2xl font-semibold textDarkGray">
                Community Assistant
                </p>
                <p className="textLightGray text-[14px] md:text-xl">{elem.title}</p>
              </div>
            </div>
          );
        })}
        
      </div>
    </div> : <div className="p-5 md:p-14 rounded-2xl bg-white mt-8 md:mt-14">
      <h1 className="font-bold text-base  md:text-3xl lg:mb-14 mb-5 ">
        Top Things to do here
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {topThing.descriptions && topThing.descriptions.map((elem, index) => {
          return (
            <div className="bgColor  space-x-5 md:space-x-0 p-4 md:px-[30px] md:py-[51px] flex md:block items-center rounded-2xl md:space-y-8">
              <div
                className="bg-white w-14 h-14 md:p-3 md:w-20 md:h-20 flex items-center justify-center rounded-2xl"
                key={index}
              >
                {/* <p   className="w-[30px] h-[30px] md:w-full md:h-full">
                  {elem.icon}
                </p> */}
                <p>{elem.emoji}</p>
              </div>
              <div className="md:space-y-2">
                <p className="text-[15px] md:text-2xl font-semibold textDarkGray">
                Community Assistant
                </p>
                <p className="textLightGray text-[14px] md:text-xl">{elem.title}</p>
              </div>
            </div>
          );
        })}


      </div>
    </div>

  );
};

const data = [
  {
    icon: handShakeIcon,
    title: "# Apps and Games",
    desc: "Find the PRemium Apps for free",
  },
  {
    icon: rocketIcon,
    title: "# Apps and Games",
    desc: "Find the Premium Apps for free",
  },
  {
    icon: laptopIcon,
    title: "# Apps and Games",
    desc: "Find the Premium Apps for free",
  },
  {
    icon: laptopIcon,
    title: "# Apps and Games",
    desc: "Find the Premium Apps for free",
  },
];
export default TopThings;
