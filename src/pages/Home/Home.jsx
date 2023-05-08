import React from 'react'
import './Home.css'
import { Col, Row, } from 'react-bootstrap';

const Home = () => {

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            Mi presentación :D
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menú
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#portfolio"
                >
                  Conociendo historias
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  Acerca de mi
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <header className="masthead bg-dark text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* Masthead Avatar Image*/}
          <img
            className="masthead-avatar mb-5"
            id="img-avatar"
            src="src\assets\img\memememe.jpg"
            alt="..."
          />
          {/* Masthead Heading*/}
          <h1 className="masthead-heading text-uppercase mb-0">
            Cristopher Jesus Rubio Sanchez
          </h1>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Masthead Subheading*/}
          <p className="masthead-subheading font-weight-light mb-0">
            ¿Quién soy? - ¿De dónde vengo? - ¿A donde voy? - ¿Qué me representa?
          </p>
        </div>
      </header>
      {/* Portfolio Section*/}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Conociendo historias
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Portfolio Grid Items*/}
          <div className="row justify-content-center">
            {/* Portfolio Item 1*/}
            <div className="col-xs-12 col-lg-6 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <h2 className="text-light">¿Quién soy?</h2>
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src\assets\img\que-me-representa2.jpg"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 2*/}
            <div className="col-xs-12 col-lg-6 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <h2 className="text-light">¿De dónde vengo?</h2>
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src\assets\img\de-donde-vengo.jpg"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 3*/}
            <div className="col-xs-12 col-lg-6 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <h2 className="text-light">¿A dónde voy?</h2>
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src\assets\img\a-donde-voy.jpg"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 4*/}
            <div className="col-xs-12 col-lg-6 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <h2 className="text-light">¿Qué me representa?</h2>
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src\assets\img\quien-soy2.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section*/}
      <section className="page-section bg-dark text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Acerca de mi
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* About Section Content*/}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                ¡Hola! Mi nombre es Cristopher y cree esta página utilizando
                React en Javascript junto con Bootstrap. Soy un estudiante de Ingenieria
                Robótica, preparado para lidiar con los desafios
                que se presen diariamente en la vida :).
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Cuento con conocimientos en circuitos eléctronicos; herramientas
                como HTML5, CSS, lenguajes de programación como Python, C,
                Javascript y Matlab. Mis intereses más grandes son la ecnología
                y la automatización.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section*/}
      <section className="page-section" id="contact">
        <div className="container">
          {/* Contact Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contacto
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Contact Section Form*/}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Mi correo: cristopher.rubio6397@alumnos.udg.mx</li>
                <li className="list-group-item">Mi GitHub: Cris-Rub</li>
                <li className="list-group-item">Mi Linkedin: cris-rub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <p className="lead mb-0">
                Cristopher Jesus Rubio Sanchez
                <br />
                Guadalajara, Jalisco, México.
              </p>
            </div>
            {/* Footer Social Icons*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Mis conexiones</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Cris-Rub">
                <i className="fs-4 bi bi-github" />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/cris-rub/">
                <i className="fs-4 bi bi-linkedin" />
              </a>
            </div>
            {/* Footer About Text*/}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Construido con</h4>
              <p className="lead mb-0">
                Javascript, React, Bootstrap
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Portfolio Modal 1*/}
      <div
        className="portfolio-modal centered modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="staticBackdropLabel">
                ¿Quién soy?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\robotics.jpg"
                            className="img-fluid card-image rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Yo soy...</h2>
                            <p className="card-text fs-5">
                              Tengo 21 años, me encuentro entrando a el último
                              año de mi carrera: Ingeniria Robótica. Cuento con
                              conocimientos en programación, circuitos
                              eléctricos, inglés y lógica matemática.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Me apasiona...</h2>
                            <p className="card-text fs-5">
                              Los videojuegos de terror clasicos, el rock, los
                              gatos, el baile y la tecnología son mis más
                              grandes pasiones.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\silent_hill_o.jpg"
                            className="img-fluid card-image rounded-end"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal 2*/}
      <div
        className="portfolio-modal centered modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        aria-labelledby="portfolioModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="staticBackdropLabel">
                ¿De dónde vengo?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\fam1.jpg"
                            className="img-fluid card-image rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Mi familia</h2>
                            <ul className="list-group card-text list-group-flush">
                              <li className="list-group-item">
                                Amor a los animales.
                              </li>
                              <li className="list-group-item">
                                El respeto, aprecio honrado y sincero.
                              </li>
                              <li className="list-group-item">
                                El costo del éxito.
                              </li>
                              <li className="list-group-item">
                                Ser proactivo, responsable y organizado.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col xs={12} md={4}>
                    <img
                      src="src\assets\img\rockefort.jpg"
                      className="card-image-1 rounded"
                      alt="..."
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <img
                      src="src\assets\img\latte1.jpg"
                      className="card-image-1 rounded"
                      alt="..."
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <img
                      src="src\assets\img\collage1.jpg"
                      className="card-image-1 rounded"
                      alt="..."
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal 3*/}
      <div
        className="portfolio-modal centered modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        aria-labelledby="portfolioModal3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="staticBackdropLabel">
                ¿A dónde voy?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              />
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\dummy2.jpg"
                            className="img-fluid card-image rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Lo que hago ahora</h2>
                            <p className="card-text fs-5">
                              Siempre me he enfocado en mejorar y expandir mis
                              conocimientos, ahora mismo mi prioridad son mis
                              habilidades profesionales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Mi razón de vivir</h2>
                            <p className="card-text fs-5">
                              No me gusta vivir por vivir, me dirigo a explorar
                              nuevas oportunidades y experiencias en la vida
                              siempre que se me presenta la oportunidad.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\que-me-representa.jpg"
                            className="img-fluid card-image rounded-end"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal 4*/}
      <div
        className="portfolio-modal centered modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        aria-labelledby="portfolioModal4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="staticBackdropLabel">
                ¿Qué me representa?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\representa1.jpg"
                            className="img-fluid card-image rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Soy mi pasado</h2>
                            <p className="card-text fs-5">
                              Lo que más significa para mi son mis metas y
                              sueños, soy una persona que nunca quiere dejar de
                              seguir aprendiendo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={12}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">Mi guia</h2>
                            <p className="card-text fs-5">
                              Soy una persona que su guia en la vida es la
                              justicia, el pensamiento lógico y lo racional por
                              lo que el mundo tecnológico es lo que más me rodea
                              y gusta... ¡y los gatos!
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="src\assets\img\representa2.jpg"
                            className="img-fluid card-image rounded-end"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home