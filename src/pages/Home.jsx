import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


import img1 from "../img/pod1.jpg";
import img2 from "../img/grid1.jpg";
import img3 from "../img/pod3.jpg";

import grid1 from "../img/grid1.jpg";
import grid2 from "../img/grid2.jpg";
import grid4 from "../img/logo2.png";
import grid5 from "../img/homegrid5.jpg";
import grid6 from "../img/homegrid11.jpg";
import grid7 from "../img/grid4.jpg";
import grid8 from "../img/homegrid6.jpg";
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

import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import abimbola from "../img/abimbola.jpg";

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
  return (
    <div className="home" id="navbar">
      {/* HOME BACKGROUND FIRST SECTION */}
      {/* HOME BACKGROUND FIRST SECTION */}
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
              <a href="https://paystack.com/pay/penielday">
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
      {/* FIRST GRID CONTAINER */}

      <div className="grid-container">
        <div className="box-grid">
          <div className="grid1">
            <div className="image">
              {" "}
              <img src={grid1} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid2} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-pen"> Peniel Day Foundation </div>
            </div>
            <div className="image">
              <div className="image-penlogo">
              {" "}
              <img src={grid4} alt="Peniel Day" /> Peniel Day Foundation{" "}
            </div>
            </div>
            
            <div className="image">
              {" "}
              <img src={grid5} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid6} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid7} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid8} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-logoo">
              {" "}
              <img src={grid9} alt="Peniel Day" />{" "}
            </div>
            </div>
            
          </div>
        </div>

        <div className="box-grid" >
          <h1>We are about doing good</h1>

          <p >
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

            <a href="https://paystack.com/pay/penielday">
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
      {/* PODCAST SECTION */}
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
          <PodcastItem img={img2} name="peniel day" icon={
          <Link to="/peniel">
          {" "}
          <FontAwesomeIcon icon={faRightLong} />
        </Link>} />
        </div>
      </div>

      {/* HOW WE MEASURE IMPACT SECTION */}
      {/* HOW WE MEASURE IMPACT SECTION */}
      {/* HOW WE MEASURE IMPACT SECTION */}

      <div className="grid-container">
        <div className="box-grid">
          <div className="grid1">
            <div className="image">
              {" "}
              <img src={grid1} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid2} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-pen"> Peniel Day Foundation </div>
            </div>
            <div className="image">
              <div className="image-penlogo">
              {" "}
              <img src={grid4} alt="Peniel Day" /> Peniel Day Foundation{" "}
            </div>
            </div>
            <div className="image">
              {" "}
              <img src={grid5} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid6} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid7} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={grid8} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-logoo">
              {" "}
              <img src={grid9} alt="Peniel Day" />{" "}
            </div>
            </div>
          </div>
        </div>

        <div className="box-grid" style={{alignItems: 'center'}}>
          <h1 style={{textAlign: 'center'}}>how we measure our impact</h1>

          <p >We are always where others need help.</p>

          <div className="counter">
            <div className="counter-content">
              <h2>8+</h2>
              <h3>No of Scholarship</h3>
            </div>

            <div className="counter-content">
              <h2>95+</h2>
              <h3>Lives Saved</h3>
            </div>

            <div className="counter-content">
              <h2>5</h2>
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
            <a href="https://paystack.com/pay/penielday">
              <button className="btn-home" style={{ background: "#009346" }}>
                {" "}
                Donate
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* NEWS AND ARTICLES SECTION */}
      {/* NEWS AND ARTICLES SECTION */}
      {/* NEWS AND ARTICLES SECTION */}

      <div className="articles">
        <div className="gradient">
          <h1>News and Articles</h1>
        </div>

        <div className="news">
          {/* NEWS SUMMER LEADERSHIP SUMMIT */}
          {/* NEWS SUMMER LEADERSHIP SUMMIT */}

          <div className="news-box">
            <Link to="leader">
              {" "}
              <img src={news1} alt="Peniel Day" />{" "}
            </Link>

            <div className="news-box1">
              <Link to="leader">
                {" "}
                <button className="btn-news" style={{ background: "#D4AF37" }}>
                  Blog Post
                </button>
              </Link>

              <h1>summer leadership summit</h1>

              <p>
                In alignment with Peniel Day Foundation's vision to support
                adolescents in prisons and on the streets with the aim of
                shinning the light of Jesus to these ones, we recieved an invite
                for partnership with the Word Assemble church, (The Leaders'
                Place) Ogba Lagos, at the Summer Leadership Summit held between
                2nd and 15th 2021...
              </p>

              <div className="news-bottom">
                <img src={abimbola} alt="" />

                <div className="hhs">
                  <h4> Abimbola Ayodele</h4>
                  <h4>
                    {" "}
                    22nd October, 2021{" "}                    
                  </h4>
                </div>
              </div> 
            </div>
          </div>

          {/* NEWS PENIEL DAY */}
          {/* NEWS PENIEL DAY */}

          <div className="news-box">
            <Link to="peniel">
              {" "}
              <img src={news2} alt="Peniel Day" />{" "}
            </Link>

            <div className="news-box1">
              <Link to="peniel">
                <button className="btn-news" style={{ background: "#009346" }}>
                  Featured Post
                </button>
              </Link>

              <h1>Peniel Day</h1>

              <p>
                The 3rd of December, 2017 was the first time I made a visit to
                the confines of the juvenile center for boys in Nigeria. Prior
                to that day, I do not think I paid sufficient attention to the
                existence of correctional centers or juvenile centers in
                Nigeria. But thanks to my membership in Goldmine ministry; a
                youth outreach ministry in my church I had access to boys at the
                center on that day...
              </p>

              <div className="news-bottom">
                <img src={abimbola} alt="" />

                <div className="hhs">
                  <h4> Abimbola Ayodele</h4>
                  <h4>
                    {" "}
                    22nd October, 2021{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* NEWS RAISING LEADERS */}
          {/* NEWS RAISING LEADERS */}

          <div className="news-box">
            <Link to="raising">
              {" "}
              <img src={news1} alt="Peniel Day" />{" "}
            </Link>

            <div className="news-box1">
              <Link to="raising">
                <button
                  className="btn-news"
                  style={{ background: "#D4AF37", border: "#D4AF37" }}
                >
                  Blog Post
                </button>
              </Link>

              <h1>Raising Leaders</h1>

              <p>
                To raise involves responsiveness, nurturing, mentoring,
                protection, and many other qualities you desire to add to the
                list. Whether by a biological parent, foster parent, a teacher,
                coach, or caregiver, it brings great joy and fulfillment to
                watch an individual you had invested time, resources, and skills
                in the right environment to become a great leader...
              </p>

              <div className="news-bottom">
                <img src={abimbola} alt="" />

                <div className="hhs">
                  <h4> Abimbola Ayodele</h4>
                  <h4>
                    {" "}
                    22nd October, 2021{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
