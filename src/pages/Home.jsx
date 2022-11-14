import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import client from "../client";
import dateFormat from "dateformat";

import grid4 from "../img/logo2.png";
import grid9 from "../img/logo.png";

import grid11 from "../img/home2.jpg";
import grid12 from "../img/grid5.jpg";
import grid15 from "../img/grid9.jpg";
import grid16 from "../img/homegrid9.jpg";
import grid17 from "../img/homegrid3.jpg";
import grid18 from "../img/homegrid1.jpg";

import grid21 from "../img/homegrid8.jpg";
import grid22 from "../img/grid3.jpg";
import grid23 from "../img/homegrid4.jpg";
import grid24 from "../img/homegrid10.jpg";
import grid25 from "../img/homegrid9.jpg";
import grid26 from "../img/fre1.jpg";
import grid27 from "../img/grid1.jpg";
import grid28 from "../img/homegrid11.jpg";
import grid29 from "../img/homegrid2.jpg";
import groq from "groq";
import GridContainer from "../components/GridContainer";

const PodcastItem = ({ img, name = "", icon }) => {
  return (
    <div className="podcast-itemmm">
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

const Home = () => {
  const [numbers, setNumbers] = useState([]);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("blogs")));

  useEffect(() => {
    if (localStorage.getItem("blogs")) {
      setPosts(JSON.parse(localStorage.getItem("blogs")));
    }
  }, []);

  const blogsOnly = posts[1].posts.slice(0, 3);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == 'numbers' ] {
          livesSaved,
  noOfScholarship,
  teamOutreach
         }`
      )
      .then((data) => {
        setNumbers(data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
      if (blogsOnly === null) {
        window.location.reload();
      }
  }, [blogsOnly]);

  return (
    <div className="home" id="navbar">
      {/* HOME BACKGROUND FIRST SECTION */}

      <div className="first-section">
        <div className="outer">
          <div className="first-details">
            <h1>Shining the light of Jesus with adolescents in Nigeria.</h1>

            <p>
              We stand for access to quality education and believe that through
              our efforts we can give adolescents in Nigeria access to schools
              and education.
            </p>

            <div className="box-home">
              <Link to="volunteer">
                {" "}
                <button className="btn-home"> Join Us</button>{" "}
              </Link>
              <a href="https://paystack.com/pay/penielday" target="blank">
                <button className="btn-home" style={{ background: "#009346" }}>
                  {" "}
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FIRST GRID CONTAINER */}
      {/* FIRST GRID CONTAINER */}

      <div className="grid-container">
        <GridContainer />

        <div className="box-grid">
          <h1>We are about doing good</h1>

          <p>
            We live to exemplify Jesus who went about doing good to communities
            He visited. By the help of the Holy Spirit, we serve our target
            comminities with goodness. -Acts 10:38
          </p>

          <Link to="volunteer">
            {" "}
            <button className="btn-home" style={{ background: "#009346" }}>
              {" "}
              Join Us
            </button>{" "}
          </Link>
        </div>
      </div>

      {/* SECOND GRID CONTAINER */}
      {/* SECOND GRID CONTAINER */}
      {/* SECOND GRID CONTAINER */}

      <div className="grig-contained">
        <div className="grid-contained">
          <div className="box-grid">
            <h1>Educating Adolescents</h1>

            <p>
              Jesus went about teaching, educating and enlightening the crowd.
              Just like Him, we go about the streets and prisons of Nigeria
              educating, teaching and equipping adolescents with knowledge and
              skills to be great citizens. -Matthew 5:1-2
            </p>

            <a href="https://paystack.com/pay/penielday" target="blank">
              <button className="btn-home" style={{ background: "#009346" }}>
                {" "}
                Donate
              </button>
            </a>
          </div>

          <div className="box-grid">
            <div className="grid1">
              <div className="image">
                {" "}
                <img src={grid11} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                {" "}
                <img src={grid12} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                <div className="image-logoo">
                  {" "}
                  <img src={grid9} alt="Peniel Day" />{" "}
                </div>
              </div>
              <div className="image">
                <div className="image-pen"> Peniel Day Foundation </div>
              </div>
              <div className="image">
                {" "}
                <img src={grid15} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                {" "}
                <img src={grid16} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                {" "}
                <img src={grid17} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                {" "}
                <img src={grid18} alt="Peniel Day" />{" "}
              </div>
              <div className="image">
                <div className="image-penlogo">
                  {" "}
                  <img src={grid4} alt="Peniel Day" /> Peniel Day Foundation{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD GRID CONTAINER */}
      {/* THIRD GRID CONTAINER */}
      {/* THIRD GRID CONTAINER */}

      <div className="grid-container">
        <div className="box-grid">
          <div className="grid1">
            <div className="image">
              {" "}
              <img src={grid21} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid22} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid23} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid24} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid25} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid26} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid27} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid28} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid29} alt="Peniel Day" />{" "}
            </div>
          </div>
        </div>

        <div className="box-grid">
          <h1>Nuturing Adolescents</h1>

          <p>
            Jesus made leaders of his disciples, we hope to raise and nurture
            great leaders in Nigeria. -Matthew 28:19-20
          </p>

          <Link to="ourcause">
            {" "}
            <button className="btn-home" style={{ background: "#009346" }}>
              {" "}
              Learn More
            </button>{" "}
          </Link>
        </div>
      </div>

      {/* PODCAST SECTION */}

      <div className="podcast-sect">
        <div className="podcast-sectext">
          <h1>Peniel day foundation programs</h1>

          <p>
            Read about the stories of the children we have helped and how we
            helped them.
          </p>
        </div>

        <div className="podcast-container">
          {blogsOnly.map((post, i) => (
            <React.Fragment key={i}>
              <PodcastItem
                img={post.cardImage.asset.url}
                name={post.title}
                icon={
                  <Link to={`/podcast/${post.slug.current}`}>
                    {" "}
                    <FontAwesomeIcon icon={faRightLong} />
                  </Link>
                }
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* HOW WE MEASURE IMPACT SECTION */}

      <div className="grid-container">
        <GridContainer />

        <div className="box-grid" style={{ alignItems: "center" }}>
          <h1 style={{ textAlign: "center" }}>how we measure our impact</h1>

          <p>We are always where others need help.</p>

          <div className="counter">
            <div className="counter-content">
              <h2>{numbers.noOfScholarship}+</h2>
              <h3>No of Scholarship</h3>
            </div>

            <div className="counter-content">
              <h2>{numbers.livesSaved}+</h2>
              <h3>Lives Saved</h3>
            </div>

            <div className="counter-content">
              <h2>{numbers.teamOutreach}</h2>
              <h3>Team Outreach</h3>
            </div>
          </div>

          <div className="box-home">
            <Link to="volunteer">
              {" "}
              <button className="btn-home" style={{ color: "#009346" }}>
                {" "}
                Join Us
              </button>{" "}
            </Link>
            <a href="https://paystack.com/pay/penielday" target="blank">
              <button className="btn-home" style={{ background: "#009346" }}>
                {" "}
                Donate
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* NEWS AND ARTICLES SECTION */}

      <div className="articles">
        <div className="gradient">
          <h1>News and Articles</h1>
        </div>

        <div className="news">
          {blogsOnly.map((post, i) => (
            <div className="news-box" key={i}>
              <Link to={`/podcast/${post.slug.current}`}>
                {" "}
                <img src={post.cardImage.asset.url} alt="Peniel Day" />{" "}
              </Link>

              <div className="news-box1">
                <Link to={`/podcast/${post.slug.current}`}>
                  {" "}
                  <button
                    className="btn-news"
                    style={{ background: "#D4AF37" }}
                  >
                    Blog Post
                  </button>
                </Link>

                <h1>{post.title}</h1>

                <p>
                  {post.body[0].children[0].text}...{" "}
                  <Link to={`/podcast/${post.slug.current}`}>
                    {" "}
                    <b>Read More</b>{" "}
                  </Link>
                </p>

                <div className="news-bottom">
                  <img src={post.author.image.asset.url} alt="" />

                  <div className="hhs">
                    <h4> {post.author.name} </h4>
                    <h4> {dateFormat(post.publishedAt, "mmmm dS, yyyy")} </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
