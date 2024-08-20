import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu me chamo <span className="purple">Richard Lucas </span>
            moro <span className="purple"> Imperatriz, Brasil.</span>
            <br />
            Sou atualmente Techleader/Software Engineer no Orfeu, uma startup spin-off da FWK Global.
            <br />
            Sou graduado em Engenharia Elétrica pelo IFMA, pós-graduado especialista em Engenharia de Software pela CENES.
            Tenho também especialização em Machine Learning pela Stanford University, e certificação profissional em Machine Learning para Tomada de Decisões pelo MIT (Massachusetts Institute of Technology).
            <br />
            <br />
            Além de desenvolver soluções, também amo:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tocar música
            </li>
            <li className="about-activity">
              <ImPointRight /> Pesquisar sobre IA'
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar videogame
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Faça hoje o que todos vão querer estar fazendo amanhã!"{" "}
          </p>
          <footer className="blockquote-footer">Richard Lucas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
