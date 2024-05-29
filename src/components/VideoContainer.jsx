import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';



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
    <div className='flex flex-wrap gap-8'>
      {
        videos.map((video)=>(
          <VideoCard key={video.id} info={video} />
        ))};
    </div>
  )
}

export default VideoContainer;
