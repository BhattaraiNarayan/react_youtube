import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrYoutube } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { PiMicrophoneFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { YOUTUBE_SEARCH_API_KEY } from "../utils/constants";


const Head = () => {

  const [ searchQuery, setSearchQuery] = useState("");
  const [ suggestions, setSuggestions] = useState([]);
  const [ showSuggestions, setShowSuggestions] = useState([false]);

  useEffect(()=>{
    //API call
    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the api call
   const timer = setTimeout(()=> getSearchSuggestions(), 200);
    return ()=>{
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  const getSearchSuggestions = async() =>{
    console.log("API CALL - "+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API_KEY+searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
  }


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
      <div className="flex flex-col col-span-10 w-full">
        <div className="flex w-full">
          <input
            className="w-2/3  border border-gray-300 p-2 rounded-l-full pl-4"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-300 p-2 rounded-r-full">
            <CiSearch className="w-8 h-6 mx-2" />
          </button>
          <div className="w-10 h-10 ml-4 bg-gray-100 border rounded-full flex items-center justify-center">
            <PiMicrophoneFill className="color-black w-5 h-5" />
          </div>
        </div>
        {showSuggestions && (
          <div className="fixed my-8 mx-2 px-2 py-3 w-[43rem] ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="bg-white shadow-lg py-2 px-4 hover:bg-slate-100"
                >
                  🔍 &nbsp;&nbsp;{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* the last 3 buttons start here */}
      <div className="flex items-center justify-between col-span-1">
        <RiVideoAddLine className="w-5 h-5 mx-2" />
        <BsBell className="w-5 h-5" />
        <FaUserCircle className="text-green-900 h-8 w-10" />
      </div>
    </div>
  );
};
export default Head;
