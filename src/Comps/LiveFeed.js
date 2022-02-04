import axios from "axios";
import React, { useState, useEffect } from "react";

const LiveFeed = (props) => {
  const [data, setData] = useState({});
  const [youtubeURL, setYtUrl] = useState();
  useEffect(() => {
    getVideo();
    console.log("logged");
  }, [props.location]);

  async function getVideo() {
    const response = axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YT_API_KEY}&type=video&q=${props.location} live cam`
      )
      .then((response) => {
        const dataInit = response.data;
        console.log(dataInit);
        setData(dataInit);
        setYtUrl(
          `https://www.youtube.com/embed/${dataInit.items[0].id.videoId}?autoplay=1`
        );
        console.log(youtubeURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="live-feed-container">
      <div className="iframe-container">
        <iframe
          width="1344"
          height="756"
          src={youtubeURL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveFeed;
