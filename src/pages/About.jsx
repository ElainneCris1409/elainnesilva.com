import React from 'react';
import styled from "styled-components";
import Typed from "react-typed";
import aboutImg from '../assets/images/about.jpg';
import { inject } from '@vercel/analytics';

function About(){
    inject();
    return (  
            <MainAbout>
                <DivImageAbout>
                    <DivImageAboutImg src={aboutImg} alt="About Image" />
                </DivImageAbout>
                <div>
                    <section>
                        <h2>Olá! Eu sou Elainne Silva.</h2>
                        <P>
                            Tenho 41 anos, sou de Manaus-AM, Brasil, e atualmente vivo em
                            Portugal. Sou esposa, mãe, mãe de pet, enfermeira por formação e apaixonada
                            por tecnologia. Recentemente, finalizei uma Pós-Graduação em{" "}
                            <strong>Software Quality Assurance (QA)</strong> pelo{" "}
                            <strong>Instituto Superior de Engenharia do Porto (ISEP)</strong> e estou em
                            busca de novos desafios no mundo da tecnologia.
                        </P>
                    </section>
                    <section>
                        <h3>Minha Jornada Profissional</h3>
                        <P>
                            Sou formada em <strong>Enfermagem</strong> pela Faculdade Metropolitana
                            de Manaus, com mais de 10 anos de experiência na área da saúde. Ao
                            imigrar para Portugal, decidi dar um novo rumo à minha carreira, movida
                            pela vontade de aprender e pela paixão por inovação.
                        </P>
                        <P>
                            Minha transição para a tecnologia começou quando, como enfermeira,
                            participei do levantamento de requisitos para implementar funcionalidades
                            em sistemas hospitalares. Essa experiência me mostrou o impacto da
                            tecnologia na otimização de processos e despertou meu interesse por{" "}
                            <strong>Qualidade de Software</strong> e{" "}
                            <strong>Desenvolvimento Fullstack</strong>.
                        </P>
                    </section>
                    <section>
                        <h3>Destaques da Minha Formação</h3>
                        <ul>
                            <li>Enfermagem pela Faculdade Metropolitana de Manaus.</li>
                            <li>
                                Pós-Graduação em QA pelo Instituto Superior de Engenharia do Porto
                                (2024).
                            </li>
                            <li>
                                Experiência prática em análise de requisitos e implementação de
                                soluções tecnológicas para a área da saúde.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Habilidades e Valores</h3>
                        <ul>
                            <li>
                                <strong>Foco e Dedicação</strong>: Sempre disposta a aprender e encarar
                                novos desafios.
                            </li>
                            <li>
                                <strong>Trabalho em Equipe</strong>: Facilidade em colaborar e me
                                comunicar em diferentes contextos.
                            </li>
                            <li>
                                <strong>Curiosidade Técnica</strong>: Em constante aprimoramento para
                                alcançar meu objetivo de me tornar uma desenvolvedora fullstack.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Meu Objetivo</h3>
                        <P>
                            Aproveitar minha experiência única como enfermeira e minha formação em QA
                            para desenvolver soluções tecnológicas que impactem positivamente a vida
                            das pessoas. Estou pronta para contribuir em projetos desafiadores e
                            crescer profissionalmente no universo da tecnologia.
                        </P>
                    </section>
                </div>
            </MainAbout>
        );
    }
    

const Inovation = styled.div`
background-image: linear-gradient(135deg, var(--purple) 0%, var(--pink) 70%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: bold;
`;

const MainAbout = styled.main`
  margin: 0em 1em 5em 1em;
  font-size: 1em;
  text-align: left;
  background: var(--current-line);
  border-radius: 70px;
  padding: 2em;

  @media screen and (min-width: 900px) {
    margin: 0em 10em 5em 10em;
    display: flex;
    text-align: left;
    align-items: center;
  }
`;

const P = styled.p`
  color: var(--color-primary);
`;

const DivImageAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DivImageAboutImg = styled.img`
  width: 100%;
  border-radius: 20px;
  opacity:  1;
  transition: 250ms;
  &:hover{
    opacity: 1;
    transition: 250ms;
  }
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export default About;