import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import groq from "groq";
import client from "../client";
import Spinner from "../components/Spinner";

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
    </div>
  );
};

const Podcast = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == 'author' ] {
          bio,
       image {
        asset -> {
          id,
          url
        }
       },
       name
         }`
      )
      .then((data) => {
        setAuthor(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == 'category' ] {
      name,
      description,
      "posts": *[_type == 'post' && references(^._id)] {
        title,
      slug,
      body,
      link,
      publishedAt,
      author -> {
        name,
        image {
          asset -> {
          url
        }
        }
      },     
      cardImage {
        asset -> {
          _id,
          url
        }
      },
      bannerImage {
        asset -> {
          _id,
          url
        }
      },
        mainImage {
          asset -> {
            _id,
          url
        },
        alt
        }
      }
    }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="podcast" id="navbar">
      {posts.length === 0 && <Spinner />}
      <div>
        <div className="podcast-banner">
          <h1>Podcast</h1>
        </div>

        {posts.map((pots, i) => (
          <div key={i}>
            <div className="category-sanity">
              <div className="podcast-title">
                <h1>{pots.description}</h1>
              </div>
              <div className="podcast-container">
                {pots.posts.map((podcst, i) => (
                  <PodcastItem
                    key={i}
                    img={podcst.cardImage.asset.url}
                    name={podcst.title}
                    icon={
                      podcst.link === null ? (
                        <Link to={`/podcast/${podcst.slug.current}`}>
                          <FontAwesomeIcon icon={faRightLong} />
                        </Link>
                      ) : (
                        <a href={podcst.link} target="_blank" rel="noreferrer">
                          {" "}
                          <FontAwesomeIcon icon={faRightLong} />
                        </a>
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* MEET OUR SPEAKERS */}
        <div className="podcast-title">
          <h1>meet our speakers</h1>
        </div>
        <div className="container2">
          {author.map((auth, i) => (
            <div className="column1" key={i}>
              <TeamMembers img={auth.image.asset.url} name={auth.name} />
              <p>{auth.bio[0].children[0].text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
