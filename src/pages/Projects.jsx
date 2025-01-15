import React from 'react';
import styled from "styled-components";
import PostgraduateImage from '../assets/images/PostgraduateImage.png'; // Substitua pela imagem do projeto
import { inject } from '@vercel/analytics';

const cardProjects = [
  {
    title: "Postgraduate Project",
    value: "postgraduateProject",
    description: "Click here to access the repository for my postgraduate project at ISEP.",
    url: "https://github.com/ElainneCris1409/projeto-isep.git", // Link do repositório
    image: PostgraduateImage // Imagem representativa do projeto
  }
  // Adicione novos projetos aqui como objetos dentro do array
];

function Projects() {
  inject();
  return (
    <Main>
      <Ul>
        {cardProjects.map((project) => (
          <A key={project.value} target="_blank" rel="noreferrer" href={project.url}>
            <Li>
              <ImageLi src={project.image} alt={project.title} />
              <LiStrong>{project.title}</LiStrong>
              <PCard>{project.description}</PCard>
            </Li>
          </A>
        ))}
      </Ul>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 3em;
`;

const Ul = styled.ul`
  height: 100%;
  flex-wrap: wrap;
  place-content: center;
  width: 80vw;
  gap: 16px;
  -webkit-box-pack: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: inline-flex;
  position: relative;
  top: 5px;
  justify-content: space-around;
  border-radius: 30px;
`;

const A = styled.a`
  text-decoration: none;
  background: var(--current-line);
  border-radius: 20px;
  @media screen and (min-width: 600px) {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;

const Li = styled.li`
  width: 350px;
  height: auto;
  border-radius: 10px;
  list-style: none;
  margin: 20px 16px;
  animation: 1s showItens;
  @media screen and (min-width: 600px) {
    width: 550px;
    &:hover {
      transition-duration: 0.3s;
      opacity: 1;
    }
  }
  @keyframes showItens {
    from {
      opacity: 0;
    }
  }
`;

const LiStrong = styled.strong`
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0px 12px;
`;

const ImageLi = styled.img`
  width: 100%;
  border-radius: 10px;
  &:hover {
    transition: 0.2s;
    transform-origin: center center;
    transform: scale(1.03) rotate(0.5deg);
  }
`;

const PCard = styled.p`
  text-align: center;
  opacity: 0.8;
  color: var(--color-primary);
`;

export default Projects;
