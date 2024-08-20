import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prev from "../../Assets/Projects/prev.png";
import emotion from "../../Assets/Projects/emotion.png";
import briefeen from "../../Assets/Projects/briefeen.png";
import mergemarketing from "../../Assets/Projects/mergemarketing.png";
import emergenciaflix from "../../Assets/Projects/emergenciaflix.png";
import orfeu from "../../Assets/Projects/orfeu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong>recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente (Alguns são privados, então vai só uma prévia 😉).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mergemarketing}
              isBlog={false}
              title="MergeMarketing"
              description="Uma suite IA completa para auxiliar agências de marketing em todo seu pipeline de acompanhamento. Envolve sistemas multi-agentes baseados em LLM para criação de Estratégias de Marketing, geração de copy para post, roteiro para vídeos entre outras funcionalidades."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orfeu}
              isBlog={false}
              title="Orfeu"
              description="Um orquestrador de jornadas de inovação. Meu filhote personificado em Startup SaaS. Esta aplicação envolve uma coleção de features super interessantes para prover um ambiente para gerir jornadas de inovação de forma direta e descomplicada"
              demoLink="https://orfeu.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={briefeen}
              isBlog={false}
              title="Briefeen"
              description="Plataforma online para gestão de projetos de Arquitetura/engenharia/etc... Nessa plataforma, você pode gerir seu projeto desde o briefing até a entrega."
              demoLink="https://briefeen.com.br/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prev}
              isBlog={false}
              title="Previsão do Mercado Financeiro - Fuzzy"
              description="Esta pesquisa valida a aplicação de lógica difusa (Fuzzy) para a previsão do mercado financeiro. "
              ghLink="https://github.com/rlucasfm/previsao-financ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emergenciaflix}
              isBlog={false}
              title="EmergenciaFlix"
              description="Plataforma Open-source para área de membros de cursos para profissionais da saúde, especializando em cursos de emergência como APH, injétaveis, etc."
              ghLink="https://github.com/rlucasfm/emergenciaflix"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconheciento facial - Porteiro IA"
              description="Aplicação de um sistema de reconhecimento facial usando visão computacional para autorizar o acesso de pessoas à ambientes corporativos privados."
              ghLink="https://github.com/rlucasfm/facerec"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
