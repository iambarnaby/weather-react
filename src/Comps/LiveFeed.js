import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const LiveFeed = (props) => {
  const [data, setData] = useState({});
  const [youtubeURL, setYtUrl] = useState();

  const gooAp = "";
  useEffect(() => {
    getVideo();
    console.log("logged");
  }, [props.location]);

  async function getVideo() {
    const response = axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${gooAp}&type=video&q=${props.location} live cam`
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
    <>
      <div className="live-feed">
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
    </>
  );
};

export default LiveFeed;
