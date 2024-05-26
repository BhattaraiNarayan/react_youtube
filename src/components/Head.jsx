import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrYoutube } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { PiMicrophoneFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";


const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col py-2 items-center shadow-sm">
      <div className="flex col-span-1 gap-4">
        <RxHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="w-6 h-10 cursor-pointer"
        />
        <div className="flex items-center">
          <GrYoutube className="text-red-500 h-8 w-12 cursor-pointer" />
          YouTube<sup className="p-1">JP</sup>
        </div>
      </div>
      <div className="flex justify-center items-center col-span-10">
        <input
          className="w-3/5  border border-gray-300 p-2 rounded-l-full pl-4"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-300 p-2 rounded-r-full">
          <CiSearch className="w-8 h-6 mx-2" />
        </button>
        <div className="w-10 h-10 ml-4 bg-gray-200 border rounded-full flex items-center justify-center">
          <PiMicrophoneFill className="color-black w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center justify-between col-span-1">
        <RiVideoAddLine className="w-6 h-6" />
        <BsBell className="w-6 h-6" />
        <FaUserCircle className="text-green-900 h-10 w-12" />
      </div>
    </div>
  );
};

export default Head;
