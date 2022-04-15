import React from "react";
import "./home.css";

import lconoGithub from "../../src/social-media-icons/icons8-github.svg";
import lconoLinkedin from "../../src/social-media-icons/icons8-linkedin.svg";
import lconoStackoverflow from "../../src/social-media-icons/icons8-stackovelflow.svg";
import lconoTwitter from "../../src/social-media-icons/icons8-twitter.svg";
import lconoFacebookMenuSvg from "../../src/social-media-icons/icons8-facebook.svg";

const Home = () => {
  return (
    <div className="home">
      
        <div className="container_home">
          <div className="content_about">
            <div className="title_home">
              <h1>I'm Gerardo.</h1>
            </div>
            <h3>
              I am a front-end developer focused on crafting clean &
              user-friendly experiences, I am passionate about creating quality
              software that solves problems. I am always in continuous learning
              to be able to improve every day.
            </h3>


       

        <hr />
        <div className="social_home">
          <div>
            {" "}
            <img
              className="social_icon_home"
              src={lconoGithub}
              alt="logo"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              className="social_icon_home"
              src={lconoTwitter}
              alt="logo"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              className="social_icon_home"
              src={lconoStackoverflow}
              alt="logo"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              className="social_icon_home"
              src={lconoLinkedin}
              alt="logo"
            />{" "}
          </div>
          <div>
            {" "}
            <img
              className="social_icon_home"
              src={lconoFacebookMenuSvg}
              alt="logo"
            />{" "}
          </div>
        </div>
        </div>
        </div>
      </div>
  
  );
};

export default Home;
