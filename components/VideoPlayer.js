import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
const VideoPlayer = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videojs(videoRef.current, {
          sources: [
            {
              src: "../public/video/Gajaman.mp4",
            }
          ]
        });
      }
    });
    return ( 
        <div>
            <video controls ref={videoRef} className="video-js" />
        </div>
     );
}
 
export default VideoPlayer;