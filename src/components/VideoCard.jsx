import React from "react";

const VideoCard = ({ info = {} }) => {
  console.log(info);

  // Destructure with default values to avoid errors
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle = "", title = "", thumbnails = { high: "" } } = snippet;

  return (
    <div className="p-2 ml-4 mr-2 my-2 w-72 shadow-lg">
      <img alt="" src={thumbnails.high.url} className="rounded-lg"/>
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
