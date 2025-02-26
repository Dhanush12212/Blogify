import React, { useEffect, useState } from 'react';
import { 
  FacebookShareButton, 
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from "react-share"; 

function ShareTo() {
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(window.location.href);  //  Need to change the url after hosting
  }, []);

  return (
    <div className='flex justify-around'>  

      <FacebookShareButton url={currentLocation} hashtag='#NewBlog #Blogify'>
        <FacebookIcon size={36} round={true} /> 
      </FacebookShareButton>

      <LinkedinShareButton url={currentLocation} title='Check out my new blog on Blogify!'>
        <LinkedinIcon size={36} round={true} />
      </LinkedinShareButton>

      <TwitterShareButton url={currentLocation} title='Check out my latest blog on Blogify!'>
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton> 
    </div>
  );
}

export default ShareTo;
