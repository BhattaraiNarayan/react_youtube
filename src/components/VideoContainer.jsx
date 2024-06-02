import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



const VideoContainer = () => {

const [videos, setVideos] = useState([]);

 useEffect(() => {
  getVideos();

 }, []); 


const getVideos = async () => {
const data = await fetch(YOUTUBE_VIDEOS_API_KEY);
const json = await data.json();
console.log(json.items); 
setVideos(json.items);
};
  return (
    <div className="flex flex-wrap gap-8">
      {videos.map((video) => (
        <Link key={video.id} to={"/react_youtube/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
