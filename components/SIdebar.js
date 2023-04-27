import React from "react";
import SidebarLinks from "./SidebarLinks";
import { AiOutlineInbox, AiOutlineUser } from "react-icons/ai";
import { BiHash, BiHomeCircle } from "react-icons/bi";
import { BsBell, BsThreeDots, BsTwitter } from "react-icons/bs";
import {TbBrandTwitter} from 'react-icons/tb'
import { HiOutlineDotsCircleHorizontal, HiUser } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

function SIdebar() {
  const { data: session } = useSession();

  return (
    <div className=" sm:flex flex-col items-start xl:p-5 fixed h-full border-r border-gray-400 w-2/12 lg:w-3/12 pr-0 lg:pr-8">
      <div>
        <BsTwitter className=" text-[#1DA1F2] text-3xl" />
      </div>
      <div className="space-y-1 mt-4 mb-2.5 ">
        {/* xl:ml-24 */}
        <SidebarLinks text="Home" Icon={BiHomeCircle} />
        <SidebarLinks text="Explore" Icon={BiHash} />
        <SidebarLinks text="Notifications" Icon={BsBell} />
        <SidebarLinks text="Messages" Icon={AiOutlineInbox} />
        <SidebarLinks text="Twitter Blue" Icon={TbBrandTwitter} />
        <div className="text-black flex items-center justify-start text-3xl space-x-3 hover:bg-gray-400 rounded-full cursor-pointer transition-all duration-300 py-2 w-fit">
          <HiUser />
          <span className="hidden lg:inline text-xl font-bold">Profile</span>
        </div>
        <SidebarLinks text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      <button className="hidden lg:inline bg-[#1DA1F2] text-white rounded-full w-4/5 py-3 text-lg font-bold hover:bg-[#1a8cd8]">
        Tweet
      </button>

      <div
        className="text-[#d9d9d9] flex items-center mt-16 py-2"
        onClick={signOut}
      >
        <img
          src={session?.user?.image}
          alt=""
          className="h-10 w-10 mr-3 rounded-full"
        />
        <div className="hidden lg:inline leading-5 text-black">
          <h4 className="text-sm font-bold">{session?.user?.name}</h4>
          <p className="">@{session?.user?.tag}</p>
        </div>
        <BsThreeDots className="h-5 hidden xl:inline ml-10 text-black" />
      </div>
    </div>
  );
}

export default SIdebar;
