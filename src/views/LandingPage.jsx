import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import heroBg from "../assets/heroBg.png";
import avatar from "../assets/heroAvatar.png";
import Button from "../components/Button";
import members from "../assets/members.svg";
import channels from "../assets/channels.svg";
import TopThings from "../components/TopThings";
import RecentActivity from "../components/RecentActivity";
import ExclusiveAccess from "../components/ExclusiveAccess";
import CTA from "../components/CTA";
import { list } from "postcss";


const LandingPage = () => {
  const [community, setData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log("new updated Data " , community)

  const [ctype , setCType] = useState(1)
  
  // const { communityId } = useParams()
  const communityId = "d0f56c1d-fc83-4e9a-9d34-63ff412822f7";
  // "e1095cfa-e00c-4246-a01c-9767751e325b";
  var color = "489EFF";
  const colors = [
    "489EFF",
    "369791",
    "CF5E94",
    "4B9EFF",
    "FF6928",
    "79A57B",
    "6E39DF",
  
  ] ;
  const [selectedColor , setSelectedColor] = useState(0);

 useEffect(()=>{
const intervalId = setInterval(()=>{
  setSelectedColor((selectedColor + 1) % colors.length);
}, 5000);


 return ()=> clearInterval(intervalId);

 },[selectedColor, colors.length])

  
const getData = () => {
  console.log(1);
  const url = "http://51.159.11.53:9999/v1/community/public/get?communityId=" + communityId;
  fetch(url, {})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    })
    .catch((error) => console.error(error));
}
    

     const [dColor , setDcolor] = useState("#111");

const getTheme = () => {
  console.log(2);
  const url = "http://51.159.11.53:9999/v1/community/promo-page/public/theme?communityId=" + communityId;
  fetch(url, {})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data["colour"]);
      color =  "#"+colors[data["colour"]];
      console.log(color);
      setDcolor(color);
      setCType(data.theme)
      // setData(data);
      // setLoading(false);
    })
    .catch((error) => console.error(error));
}





  useEffect(() => {
    getTheme();
   getData();
  }, []);
 
   const dnone = "hidden";
   const dblock = "visible";
  const [desLongSet, setDesLongSet] = useState(false)
const [dread, setDread] = useState(dblock);
 const [readless1 , setReadless] = useState(dnone);
       const dnone1 = "none";
       const dblock1 = "inline-block";
 const [dread1 , setDread1] = useState(null)
  const readmore = ()=>{
    setDesLongSet(true);
    setDread(dnone);
    setReadless(dblock)
    setDread1(dnone1);
  }


   const readless = ()=>{
    setDread(dblock);
    setDread1(dblock1)
    setReadless(dnone);
    setDesLongSet(false);
   }
  return (
   loading ?  <div></div>: <div className="w-screen min-h-screen bgColor">
      {/* ======NAVBAR========= */}
      <div className="bg-white w-screen py-2 h-[72px] md:py-0 md:h-24 flex items-center">
        <div className="w-[90%] lg:container mx-auto flex items-center justify-between">
          <div className="bg-[#FFCE73] rounded-full w-[45px] h-[45px] md:w-14 md:h-14">
            <img src={community.result.communityProfileUrl} alt="" className="w-full h-full" />
          </div>

          <button   onClick={(e) => {
              e.preventDefault();
              window.location.href="https://play.google.com/store/apps/details?id=com.app.switchapp1";
              }}  className="flex items-center justify-center px-[15px] rounded-[10px] md:rounded-2xl md:min-w-[13rem] text-white font-semibold text-[15px] md:text-xl  w-[125px] h-[33px] md:h-[52px]  md:w-[210px] py-[12px]" style={{backgroundColor: dColor }}>
            Download
          </button>
        </div>
      </div>

      <div className="w-[90%] md:container mx-auto ">
        {/* ======Hero Section ========= */}
     {
      ctype == 2 ?
        <div className="my-8 md:my-14 ">
          <div className="w-full relative h-[130px] md:h-[260px] overflow-visible ">
            <img
              src={community.result.communityCoverUrl}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute z-10 w-[100px] h-[100px] md:w-[190px] md:h-[190px] transform   top-[60%] flex items-center justify-start left-0 ml-6">
              <img src={community.result.communityProfileUrl} alt="" className="w-full h-full object-cover rounded-l" />
            </div>
          </div>

          <div className="bg-white relative w-full pt-28 md:pt-44 p-6 md:pb-14 md:px-10 flex items-center justify-start flex-col space-y-[20px] md:space-y-8 -mt-10 rounded-b-2xl ">
           <div className="w-full flex justify-start">
           <h1
              className="text-black -m-9 ml-[1px] text-left font-bold text-2xl md:text-5xl "
              style={{
                letterSpacing: "-1px",
              }}
            >
              {community.result.communityName}
            </h1>

           </div>
            <div className="flex items-center absolute  right-2 top-2 justify-center space-x-2 md:space-x-4">
              <div className="bg-[#f9f9f9] p-2 md:px-0 md:py-[12px] w-[145px] h-[45px] md:w-52 md:h-[50px] flex items-center justify-center space-x-3 rounded-xl">
                <img src={members} alt="" className="w-5 md:w-8" />{" "}
                <p className="font-bold text-[14px] md:text-lg">{community.result.member} members</p>
              </div>
              <div className="bg-[#f9f9f9]  py-3 md:px-0  md:py-[12px] w-[145px] h-[45px]  md:h-[50px]  md:w-52 flex items-center justify-center space-x-3 rounded-xl">
                <img src={channels} alt="" className="w-5 md:w-8" />{" "}
                <p className="font-bold text-xs md:text-lg">{community.result.numberOfChannels} channels</p>
              </div>
            </div>


           
            <p className="font-medium text-[#323232] text-sm  ">
            {
              desLongSet? community.result.communityDescription:
              community.result.communityDescription.slice(0, 200) 
              
              }
                <span style={{visibility:dread, display:dread1}} onClick={()=> readmore()} className="text-black cursor-pointer ml-3  text-[18px] ">  read more...</span>
              <span style={{visibility:readless1}} onClick={()=> readless()} className="text-black cursor-pointer  text-[18px]">  read less</span>
            
            
            </p>
            
           <div className="w-full flex justify-start">
           <Button colors={dColor} size="large"  link={community.result.link} >
              <div className="flex items-center justify-center space-x-2">
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
            </Button>
           </div>
          </div>
        </div>:
           <div className="my-8 md:my-14 ">
           <div className="w-full relative h-[130px] md:h-[260px] overflow-visible ">
             <img
               src={community.result.communityCoverUrl}
               alt=""
               className="w-full h-full object-cover rounded-xl"
             />
             <div className="absolute w-[100px] h-[100px] md:w-[190px] md:h-[190px] transform   top-[60%] flex items-center justify-center left-0 right-0 mx-auto">
               <img src={community.result.communityProfileUrl} alt="" className="w-full h-full object-cover rounded-l" />
             </div>
           </div>
           <div className="bg-white w-full pt-28 md:pt-44 p-6 md:pb-14 md:px-10 flex items-center justify-center flex-col space-y-[20px] md:space-y-8 -mt-10 rounded-b-2xl ">
             <h1
               className="text-black font-bold text-2xl md:text-5xl "
               style={{
                 letterSpacing: "-1px",
               }}
             >
               {community.result.communityName}
             </h1>
 
             <div className="flex items-center justify-center space-x-2 md:space-x-4">
               <div className="bg-[#f9f9f9] p-2 md:px-0 md:py-[12px] w-[145px] h-[45px] md:w-52 md:h-[50px] flex items-center justify-center space-x-3 rounded-xl">
                 <img src={members} alt="" className="w-5 md:w-8" />{" "}
                 <p className="font-bold text-[14px] md:text-lg">{community.result.member} members</p>
               </div>
               <div className="bg-[#f9f9f9]  p-3 md:px-0  md:py-[12px] w-[145px] h-[45px]  md:h-[50px]  md:w-52 flex items-center justify-center space-x-3 rounded-xl">
                 <img src={channels} alt="" className="w-5 md:w-8" />{" "}
                 <p className="font-bold text-xs md:text-lg">{community.result.numberOfChannels} channels</p>
               </div>
             </div>
            
             <p className="font-medium text-[#323232] text-sm  text-start ">
            {
              desLongSet? community.result.communityDescription:
              community.result.communityDescription.slice(0, 200) }
              <button onClick={()=> readmore()} className="text-blue-500 text-[18px] ml-2">  read more...</button>
            
            </p>

 
             <div className="mb:hidden"></div>
             <Button colors={dColor} size="large"  link={community.result.link} >
               <div className="flex items-center justify-center space-x-2">
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
             </Button>
           </div>
         </div>
 


            }

        {/* Section 2 => Top things to do  */}

        <TopThings community={community.result}/>

        {/* Section 3 => Recent Activity  */}

        <RecentActivity cdes={community.result.communityDescription} colors={dColor} community={community.result} />

        {/* Section 4 => Exclusive Access */}

        <ExclusiveAccess community={community.result} />

        {/* Section 5 => CTA */}
        <CTA colors={dColor} community={community.result} />

        <p className="font-normal px-5 md:px-0 textLightGray text-[15px] md:text-xl text-center py-8 md:py-20">
          Copyrights 2022 - 2023 {community.result.communityName} | Powered by @Switch
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
