import React from "react";

function SidebarLinks({ Icon, text }) {
  return (
    <div className="text-black flex items-center justify-start text-3xl space-x-3 hover:bg-gray-400 rounded-full cursor-pointer transition-all duration-300 py-2 w-fit">
      <Icon />
      <span className="hidden lg:inline text-xl">{text}</span>
    </div>
  );
};

export default SidebarLinks;
