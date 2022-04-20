import React from "react";
import "./home.css";

import lconoGithub from "../../src/social-media-icons/icons8-github.svg";
import lconoLinkedin from "../../src/social-media-icons/icons8-linkedin.svg";
import lconoStackoverflow from "../../src/social-media-icons/icons8-stackovelflow.svg";
import lconoTwitter from "../../src/social-media-icons/icons8-twitter.svg";
import lconoFacebookMenuSvg from "../../src/social-media-icons/icons8-facebook.svg";

const Home = () => {
  return (
    <div className="home animate__animated animate__fadeIn animate__delay-0.8s">
      
        <div className="container_home homeImage">
          <div className="content_about">
            <div className="title_home">
              <h1>I'm Gerardo.</h1>
            </div>
            
            <div className="contact_details">
              <h3>
              Soy desarrollador  <b>front-end </b> enfocado en crear interfaces de usuario  limpias y fáciles de 
              usar, me apasiona crear software de  calidad que resuelva problemas y mejoren la calidad
               de vida de las personas, Apasionado por el diseño gráfico.
              
               
                  <blockquote> Siempre estoy en continuo aprendizaje 
                  con una proyección clara de dirigir equipos a futuro.</blockquote>
              
                </h3>

                </div>
            <hr/>
        <div className="social_home">
          <div>
            {" "}

          <a href="https://github.com/gerardoluisbv/" target="blank">
            <img
              className="social_icon_home"
              src={lconoGithub}
              alt="logo"
            />{" "}
          </a>
          </div>

          <div>
          <a href="https://twitter.com/gerardoluisbv/" target="blank">
            {" "}
            <img
              className="social_icon_home"
              src={lconoTwitter}
              alt="logo"
            />{" "}
            </a>
          </div>
          <div>
            {" "}

          <a href="https://es.stackoverflow.com/users/edit/169399" target="blank">
            <img
              className="social_icon_home"
              src={lconoStackoverflow}
              alt="logo"
            />{" "}
            </a>
          </div>
          <div>
            {" "}
            <a href="https://www.linkedin.com/in/gerardoluisbv/" target="blank">
              <img
                className="social_icon_home"
                src={lconoLinkedin}
                alt="logo"
              />{" "}
            </a>
          </div>
          <div>
            {" "}
            <a href="https://www.facebook.com/gerardo.luis.1654" target="blank" alt="Facebook">
            <img
              className="social_icon_home"
              src={lconoFacebookMenuSvg}
              alt="logo"
            />{" "}
            </a>
          </div>
        </div>
        </div>

        </div>
      </div>
  
  );
};

export default Home;
