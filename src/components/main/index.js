import React from 'react';
import LogoVNWMain from './images/logoVNW.svg'
import styled from 'styled-components'

const Main = styled.main`
margin-top: 7rem;
margin-left: var(--margin-pattern);
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


  h2 {
    font-size: 4.8rem;
    color: #0F2260;
  }

  p {
    font-size: 1.9rem;
    color: #000000;
    line-height: 2.7rem;
  }
}
`




export default function main() {
  return(
    <Main>
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

      <div className='SectionFormation'>
        <div>
          <h2>Formação</h2>
          <div>
            <img src='' alt=''/>
            <section>
              <h3>FRONT-END</h3>
              <p>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</p>
            </section>
          </div>

          <div>
            <img src='' alt=''/>
            <section>
              <h3>BACK-END</h3>
              <p>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</p>
            </section>
          </div>

          <figure>
            <img src='' alt=''/>
          </figure>

        </div>
      </div>

      <div>
        <h2>Equipe</h2>
        <div>
          <input type="text"/>
          <img src='' alt=''/>
        </div>
        <section>
          
        </section>
      </div>

      <div>
        <h2>Eventos</h2>
        <div>
          <img src='' alt=''/>
          <section>
            <h3>Tech Girls</h3>
            <p>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</p>
          </section>
        </div>
      </div>

    </Main>
  );
}
