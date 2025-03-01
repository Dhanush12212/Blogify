import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function ShareTo() {
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(window.location.href); // Change this URL after hosting
  }, []);

  return (
    <div className="flex gap-6 justify-center items-center p-2 bg-white rounded-lg shadow-md">
      {/* Facebook */}
      <FacebookShareButton url={currentLocation} hashtag="#NewBlog #Blogify">
        <FacebookIcon
          size={40}
          round={true}
          className="hover:scale-110 transition-transform duration-300"
        />
      </FacebookShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton
        url={currentLocation}
        title="Check out my new blog on Blogify!"
      >
        <LinkedinIcon
          size={40}
          round={true}
          className="hover:scale-110 transition-transform duration-300"
        />
      </LinkedinShareButton>

      {/* Twitter */}
      <TwitterShareButton
        url={currentLocation}
        title="Check out my latest blog on Blogify!"
      >
        <TwitterIcon
          size={40}
          round={true}
          className="hover:scale-110 transition-transform duration-300"
        />
      </TwitterShareButton>
    </div>
  );
}

export default ShareTo;
