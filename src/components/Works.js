import React from "react";

const Works = () => {
  return (
    <div className="home animate__animated animate__fadeIn animate__delay-0.8s">
      <div className="container_home homeImage">
        <div className="content_about">
          <div className="title_home">
            <h1> Proyectos </h1>
          </div>

          <div className="contact_details">
            <h3>
              Aplicacion web para crear notas personales, desarrollada
              utilizando
              <b> React</b>, <b>SASS</b> para los estilos y <b>Animate.css</b>{" "}
              para las animaciones, implementando la <b>API</b> de{" "}
              <b>Firebase</b> para la autenticación y <b>Firestore </b>
              como base de datos, subida de imagenes con{" "}
              <b>la API de Cloudinary</b>, manejando el estado global de la
              aplicación con <b>React-redux</b> y<b> Redux-thunk</b> para las
              acciones asíncronas, manejando las rutas mediante{" "}
              <b>React Router Dom</b>, validaciones de formularios con{" "}
              <b> validator.js, </b>
              utilizando la libreria <b> SweetAlert2 </b>para dar a los usuarios
              notificaciones y alertas agradables visualmente
            </h3>
          </div>

          <hr />

          <h2 className="text__link__proyect">
            <a
              href="https://github.com/gerardoluisbv/journal-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy en Firebase mediante CI/CD con GitHub Actions
            </a>

            <br />
            <br />
            <a
              href="https://react-journal-app-a20bb.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ir al proyecto</button>
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Works;
