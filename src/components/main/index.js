import React, { useState } from 'react';
import styled from 'styled-components'

import LogoVNWMain from './images/logoVNW.svg'
import ImageComputer from './images/SectionFormation/smallcomputerwithyellowborder-radius.svg'
import ImageCodingFormation from './images/SectionFormation/ImageCodingFormation.png'
import magnifyingGlass from './images/TeamSection/magnifyingGlass.svg'
import GirlsClassroom from './images/Events/printClassroom.png'

import PhotoDimitri from './images/TeamSection/MembrosVNW/Dimitri.jpg'
import PhotoHugo from './images/TeamSection/MembrosVNW/Hugo.jpg'
import PhotoKarla from './images/TeamSection/MembrosVNW/Karla.jpg'
import PhotoPaula from './images/TeamSection/MembrosVNW/Paula.jpg'
import PhotoThais from './images/TeamSection/MembrosVNW/Thais.jpg'
import PhotoAlineF from './images/TeamSection/MembrosVNW/AlineF.jpg'
import PhotoAlineN from './images/TeamSection/MembrosVNW/AlineNogueira.jpg'
import PhotoAndrea from './images/TeamSection/MembrosVNW/Andrea.jpg'
import PhotoCris from './images/TeamSection/MembrosVNW/Cris.jpg'
import PhotoKarynne from './images/TeamSection/MembrosVNW/Karynne.jpg'
import PhotoLuzia from './images/TeamSection/MembrosVNW/Luzia.jpg'
import PhotoMariana from './images/TeamSection/MembrosVNW/Mariana.jpg'
import PhotoMarina from './images/TeamSection/MembrosVNW/Marina.jpg'
import PhotoMarlon from './images/TeamSection/MembrosVNW/Marlon.jpg'
import PhotoPriscila from './images/TeamSection/MembrosVNW/Priscila.jpg'



const MainSection = styled.main`
margin-top: 7rem;
margin-left: var(--margin-pattern);

h2 {
    font-size: 4.8rem;
    color: #0F2260;
  }
`

const AboutSection = styled.div`
width: 100%;
/* border: 2px solid; */
display: flex;
align-items: center;
gap: 10rem;

  img {
    width: 40rem;
  }

.AboutTextSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-right: 2.5rem;


  

  p {
    font-size: 1.9rem;
    color: #000000;
    line-height: 2.7rem;
  }
}
`
const FormationSection = styled.div`
width: 100%;
margin-top: 15rem;

.contentFormationSection {
  display: flex;
  justify-content: space-between;

  figure{
    width: 54%;

    img{
      width: 100%;
      height: 55rem;
    }
  }

  .TextSection{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6rem;

    h3{
      font-size: 2.4rem;
      color: #0F2260;
    }

    .SectionStack{
      width:44rem;
      display: flex;
      gap: 1rem;

      p {
        font-size: 1.55rem;
        line-height: 2.2rem;
      }

      section {
        
        h3 {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
`

const TeamSection = styled.div`
width: 85%;
display: flex;
flex-direction: column;
gap: 2.5rem;

margin-top: 15rem;

  .SectionSearch {
    width: 100%;
    height: 8rem;
    background-color: #0F2260;

    display: flex;
    align-items: center;
    padding-left: 10rem;

    input {
      border-radius: 0.5rem;
      font-size: 2rem;
      background-color: #0F2260;
      color: #BCE0FD;
    }
  }

  .SectionImages {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    margin-top: 2rem;

    div {
      width: 23.28rem;
      height: 28rem;

      position: relative;

      img {
        width: 100%;
        height: 100%;
        position: absolute;

      }

      h4,p {
        width: 100%;
        height: fit-content;
        position: absolute;
        z-index: 1;
        text-align: center;
        bottom: 1rem;

      }

     h4 {
      font-size: 1.8rem;
      bottom: 3.5rem;
     }

     p {
      font-size: 1.5rem;
     }


    }
  }

`

const EventsSection = styled.div`
width:100%;
display: flex;
flex-direction: column;
margin-top: 10rem;
padding-right: 1.4rem;


  h2 {
    margin-bottom: 3rem;
  }

  img {
    
    width: 76%;
  }

  .EventsContent {
    display: flex;

    section {
      margin-block: auto;

      h3 {
        font-size: 3.3rem;
        
      }

      p {
        margin-top: 2rem;
        font-size: 1.6rem;
      }
    }
  }
`



export default function Main() {

  const [Team, setTeam] = useState([
    {
      nome: 'Dimitri Duque',
      job: '#voluntários',
      image:{PhotoDimitri}
    },
    {
      nome: 'Hugo Sabino',
      job: '#voluntário',
      image:{PhotoHugo}
    },
    {
      nome: 'Karla De Melo',
      job: '#voluntário',
      image:{PhotoKarla}
    },
    {
      nome: 'Paula Misan',
      job: '#voluntários',
      image:{PhotoPaula}
    },
    {
      nome: 'Thais Brait',
      job: '#voluntários',
      image:{PhotoThais}
    },
    {
      nome: 'Aline Fróes',
      job: '#CEO',
      image:{PhotoAlineF}
    },
    {
      nome: 'Aline Nogueira',
      job: '#Agente Socioemocional',
      image:{PhotoAlineN}
    },
    {
      nome: 'Andrea Marinho',
      job: '#Psicóloga',
      image:{PhotoAndrea}
    },
    {
      nome: 'Cris Dos Prazeres',
      job: '#Coordenadora Executiva',
      image:{PhotoCris}
    },
    {
      nome: 'Karynne Moreira',
      job: '# Facilitadora Técnica',
      image:{PhotoKarynne}
    },
    {
      nome: 'Luzia Merlim',
      job: '# Agente Socioemocional',
      image:{PhotoLuzia}
    },
    {
      nome: 'Mariana Correia',
      job: '#Coordenadora Administrativa',
      image:{PhotoMariana}
    },
    {
      nome: 'Marina Tiago',
      job: '#Agente de Estratégia',
      image:{PhotoMarina}
    },
    {
      nome: 'Marlon Yuri',
      job: '#Instrutor Técnico',
      image:{PhotoMarlon}
    },
    {
      nome: 'Priscila Tufani',
      job: '#Agente de Estratégia',
      image:{PhotoPriscila}
    },
  ])

  return(
    <MainSection>
      <AboutSection>
        <figure>
          <img src={LogoVNWMain} alt='Logo do Vai na Web'/>
        </figure>
        <div className='AboutTextSection'>
          <h2>Sobre o Vai na Web</h2>
          <p>
          Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.  
          </p>
          <p>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</p>
          <p>
          Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.
          </p>
        </div>
      </AboutSection>

      <FormationSection>
        <div className='contentFormationSection'>
          <div className='TextSection'>

            <h2>Formação</h2>
            <div className='SectionStack'>
              <img src={ImageComputer} alt='Imagem de uma tela de computador'/>
              <section>
                <h3>FRONT-END</h3>
                <p>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</p>
              </section>
            </div>

            <div className='SectionStack'>
              <img src={ImageComputer} alt='Imagem de uma tela de computador'/>
              <section>
                <h3>BACK-END</h3>
                <p>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</p>
              </section>
            </div>
          </div>

          <figure>
            <img src={ImageCodingFormation} alt='Imagem de código programado'/>
          </figure>

        </div>
      </FormationSection>

      <TeamSection>
        <h2>Equipe</h2>
        <div className='SectionSearch'>
          <input type="text" placeholder='Pesquisar...'/>
          <img src={magnifyingGlass} alt='Desenho de uma lupa'/>
        </div>
        <section className='SectionImages'>
          {Team.map((item) => (
            <div>
              <img src={item.image} alt={`Foto de ${item.nome}`}/>
                <h4>{item.nome}</h4>
                <p>{item.job}</p>
            </div>
          ))}
          
        </section>
      </TeamSection>

      <EventsSection>
        <h2>Eventos</h2>
        <div className='EventsContent'>
          <img src={GirlsClassroom} alt='print de tela de computador com foto da reunião da Tech Girls'/>
          <section>
            <h3>Tech Girls</h3>
            <p>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</p>
          </section>
        </div>
      </EventsSection>

    </MainSection>
  );
}
