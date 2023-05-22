import React from "react";

const Button = (props) => {
  const btnSizes = {
    large: "h-[44px] md:h-[78px] md:w-[400px] w-full ",
    small: " w-[136px] py-[10spx] md:w-[210px] py-[12px]",
  };
  return (
    <button style={{backgroundColor:props.colors}}  onClick={(e) => {
      e.preventDefault();
      window.location.href=props.link;
      }}
      className={`flex items-center justify-center px-[15px]  bg-[#489EFF] rounded-[10px] md:rounded-2xl md:min-w-[13rem] text-white font-semibold text-[15px] md:text-xl 
    ${btnSizes[props?.size]}
    `}
    >
      {props.children}
    </button>
  );
};

export default Button;
