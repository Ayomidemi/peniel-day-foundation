import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

import img1 from "../img/pod1.jpg";
import img2 from "../img/grid1.jpg";
import img3 from "../img/pod3.jpg";
import img5 from "../img/foluso.jpg";
import img4 from "../img/abimbola.jpg";
import axios from "axios";

const PodcastItem = ({ img, name = "", icon }) => {
  return (
    <div className="podcast-item">
      <div className="image-podcast">
        {" "}
        <img src={img} alt={name} />{" "}
      </div>

      <div className="podcast-details">
        <div className="podcast-name"> {name} </div>

        <div className="podcast-icon"> {icon} </div>
      </div>
    </div>
  );
};

const TeamMembers = ({ img, name = "", position = "" }) => {
  return (
    <div className="pod-item">
      <div className="image-podcast">
        {" "}
        <img src={img} alt={name} />{" "}
      </div>
      <div className="names"> {name} </div>
      <div style={{ margin: "1rem" }}> </div>
    </div>
  );
};

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://peniel-server.herokuapp.com/podcast/api/podcast-list/")

      .then((res) => {
        setPodcast(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <div className="podcast" id="navbar">
      <div className="podcast-banner">
        <h1>Podcast</h1>
      </div>
      
      {/* RECENT PODCAST */}
      {/* RECENT PODCAST */}

      <div className="podcast-title">
        <h1>recent podcasts</h1>
      </div>
      {podcast.map((pod, i) => {
        return (
          <div className="podcast-container" key={pod}>
            <PodcastItem
              img={pod.image}
              name={pod.title}
              icon={
                <a href={pod.link} target='_blank' rel="noreferrer">
                  {" "}
                  <FontAwesomeIcon icon={faRightLong} />
                </a>
              }
            />
          </div>
        );
      })}{" "}
      : {loading && <h3 className="podcast-container"> One moment please... </h3>}


      {/* RECENT EPISODES */}
      {/* RECENT EPISODES */}

      <div className="podcast-title">
        <h1>recent episodes</h1>
      </div>
      <div className="podcast-container">
        <PodcastItem
          img={img1}
          name="our maiden event programme"
          icon={
            <Link to="/maiden">
              {" "}
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          }
        />
        <PodcastItem
          img={img3}
          name="summer leadership summit 2021"
          icon={
            <Link to="/leader">
              {" "}
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          }
        />
        <PodcastItem
          img={img2}
          name="peniel day "
          icon={
            <Link to="/peniel">
              {" "}
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          }
        />
      </div>
      {/* MEET OUR SPEAKERS */}
      {/* MEET OUR SPEAKERS */}
      <div className="podcast-title">
        <h1>meet our speakers</h1>
      </div>
      <div className="container2">
        <div className="column1">
          <TeamMembers img={img4} name="abimbola ayodele" />
          <p>
            Jesus Christ was specially anointed to bind the hearts of the broken
            hearted and to bring liberty to people who may be in one form of
            prison or the other. Be it an emotional, spiritual, or physical
            prison Jesus Christ is able to break everyone one free only if we
            let Him.
          </p>
        </div>

        <div className="column1">
          <TeamMembers img={img5} name="foluso ajayi" />
          <p>
            We have read and we know of men and women who Jesus delivered from
            one prison or the other. On this podcast, we would be taking you
            through the journey of these prisoners who came to know complete
            freedom through the help of Jesus Christ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
