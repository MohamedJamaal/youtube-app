import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="	https://i.ytimg.com/vi/dk6PMt9QsjU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLApf6T-fR-XkUHNBy7CJ1MGpiHSWw"
          alt=""
        />
        <span>05:43</span>
      </div>

      <div className="video__title">Create App in 5 min made by Mohamed</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="	https://yt3.ggpht.com/ytc/AMLnZu_BbFBgOXOLYcY994jDQ-LXbeH3rVv_mW9LeSmljA=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Mohamed Gamal</p>
      </div>
    </div>
  );
}

export default Video;
