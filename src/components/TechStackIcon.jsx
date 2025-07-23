import React from "react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-transparent hover:bg-[#90E0EF] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img src={TechStackIcon} alt={`${Language} icon`} className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" />
      </div>
      <span className="text-[#0096C7] font-semibold text-sm md:text-base tracking-wide group-hover: text-[#0096C7] transition-colors duration-300">{Language}</span>
    </div>
  );
};

export default TechStackIcon;
