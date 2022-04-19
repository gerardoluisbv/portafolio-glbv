
import React from 'react'
import { Link } from 'react-router-dom';
import myPdf from './gerardoluisbv-resume.pdf';

const About = () => {
  return (
    <div className="home animate__animated animate__fadeIn animate__delay-0.8s">
      
        <div className="container_home homeImage">
          <div className="content_about">
            <div className="title_home">
              <h1> About me </h1>
            </div>
            
            <h3>
            
              Graduado formalmente como <b>Tecnico Superior Universitario en Informática </b>
              (Venezuela 2007 - 2010) , actualmente viviendo en Panama, entusiasta del aprendizaje 
              autodidacta, la innovación y las buenas prácticas de 
              programación, proactivo, bueno para resolver problemas y 
              comprender conceptos complejos, me intereso por aprender cada día, 
              me adapto a los cambios con facilidad y me enfoco a cumplir con las metas propuestas.
              
            </h3>  
           
       
       <Link to={myPdf} target="_blank" download>
            <button>
              <svg id="svg-buttom" data-name="Capa 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.85 40.62"><path d="M43.43,36.15l-9.32,7.08a1.51,1.51,0,0,1-.65.31,1.52,1.52,0,0,1-.6,0,1.42,1.42,0,0,1-.61-.28l0,0-9.32-7.08a1.5,1.5,0,1,1,1.82-2.38l7,5.28V12.55a1.5,1.5,0,1,1,3,0v26.5l7-5.28a1.5,1.5,0,1,1,1.82,2.38Z" transform="translate(-10.78 -11.05)" fill="##282c34"/><path d="M55.63,38.51v7.57A5.6,5.6,0,0,1,50,51.67H16.38a5.6,5.6,0,0,1-5.6-5.59V38.51a1.5,1.5,0,0,1,3,0v7.57a2.59,2.59,0,0,0,2.6,2.59H50a2.59,2.59,0,0,0,2.59-2.59V38.51a1.5,1.5,0,0,1,3,0Z" transform="translate(-10.78 -11.05)" fill="##282c34"/></svg>
              &nbsp; Descargar Resume 
              
            </button>
       </Link>

        <hr />
        
      </div>
    </div>
</div>

  )
}

export default About;