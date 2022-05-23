import React from "react";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import about3 from "../img/about3.png";

const OurCause = () => {
  return (
    <div className="ourcause" id="navbar">  
      <div className="about-banner">
        <h1>About Us</h1>
      </div>

      <div className="podcast-title">
        <h1>Peniel day foundation</h1>
      </div>

      <div className="about-container">
        <div className="box">
          <p>
            The 3rd of December, 2017 was the first time I made a visit to the
            confines of the juvenile center for boys in Nigeria. Prior to that
            day, I do not think I paid sufficient attention to the existence of
            correctional centers or juvenile centers in Nigeria. But thanks to
            my membership in Goldmine ministry; a youth outreach ministry in my
            church I had access to boys at the center on that day.
          </p>

          <p>
            We broke out into groups to have personable conversations with these
            boys, I had the rare opportunity to speak with about 7 or 1o boys
            that day. I wrote their names down after that meeting but
            unfortunately, I do not know where that paper is right now. One name
            I remember vividly is Emmanuel.
          </p>
        </div>

        <div className="box">
          <img src={about1} alt="Peniel Day" />
        </div>
      </div>

      <div className="about-contained">
        <div className="box">
          <img src={about2} alt="Peniel Day" />
        </div>

        <div className="box-middle">
          <p>
            It took so much restraint on my part not to cry while speaking with
            them. It took so much, it made me wonder if I could really thrive as
            a counselor. I was moved to tears not because of the living
            conditions of these boys but because of what they have gone through
            and the state of their minds. One of them asked me to help him
            reunite with his relatives, one of them did not even speak to me.
          </p>

          <p>
            My visit to the boys left an imprint in my heart, no matter how far
            away I was from Nigeria, I could not get the boys off my mind. I
            remember that I was in a class in 2019 and started to pen down
            thoughts and ideas I had for the boys and other adolescents in
            similar situations in Nigeria.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="box">
          <p>
            The pandemic in 2020, gave me time to plan and write down things
            that I shared with my friend Esther Himnikaiye. Then we began to
            share with friends and family with similar passion and vision and
            Peniel Day was born.
          </p>

          <p>
            Peniel was imprinted in my heart by the Holy spirit from the onset
            from studying Genesis 32. Peniel was a place where Jacob saw the
            Lord and His life was transformed.
          </p>

          <p>
            We call this organization of people with similar passion and vision-
            Peniel Day because it is our hope that with every outreach, every
            interaction with adolescents on the streets or prisons in Nigeria
            that they see the Lord and be transformed inside out in Jesus' name.
          </p>
        </div>

        <div className="box">
          <img src={about3} alt="Peniel Day" />
        </div>
      </div>
    </div>
  );
};

export default OurCause;
