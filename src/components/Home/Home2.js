import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXA EU ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Sempre fui apaixonado por criar soluções para os problemas ao meu redor.
              De preferência da forma mais diferente que eu puder 😉
              <br />
              A melhor forma que encontrei para isso foi desenvolvendo tecnologia!
              <br />
              <br />Sou fluente em linguagens populares como
              <i>
                <b className="purple"> Python, Typescript e C++. </b>
              </i>
              <br />
              <br />
              Descobri um amor pelo tema Inteligência Artificial ainda com 14 anos de idade, desde então foi minha área de pesquisa favorita!
              <br />
              <br />
              Há quase 10 anos pesquisando e desenvolvendo soluções com{" "}
              <i>
                <b className="purple">Machine Learning e Fuzzy Logic </b> aplicando a
                criação de produtos, aplicativos, serviços e{" "}
                <b className="purple">
                  Inovação.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se a vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rlucasfm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/richard-lucas-furtado-de-mendonca/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/richard.lucasfm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
