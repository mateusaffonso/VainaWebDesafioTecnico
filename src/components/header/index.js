import React from 'react'
import LogoVNW from './images/small-logo-VNW.svg'
import * as S from './style'




export default function Header() {
  

  return (
    <>
      <S.HeaderSection>
        <figure>
          <a href='#'><img src={LogoVNW} alt="logo Vai na Web" /></a>
        </figure>

        <S.Menu>
          <ul>
            <li>
              <a href="#AboutId">Sobre</a>
            </li>
            <li>
              <a href="#FormationId">Formação</a>
            </li>
            <li>
              <a href="#TeamId" >Equipe</a>
            </li>
            <li>
              <a href="#EventsId">Eventos</a>
            </li>
            <li>
              <a href="#ContactsId">Contatos</a>
            </li>
          </ul>
        </S.Menu>

        <S.InfoSectionHeader>
          <S.InfoContentHeader>
            <h1>
              <span>//</span> Quer construir uma carreira de sucesso como
              Desenvolvedor(a) Front-end?
            </h1>
            <div className='RegistrationInfo'>
              <div className='Circles'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h2>Inscreva-se no Vai na Web!</h2>
              <p>Inscrições 02 a 21 de Agosto</p>
            </div>
            <p>
              <b>Link para o formulário:</b> bit.ly/CarreiraVaiNaWeb
            </p>
          </S.InfoContentHeader>
        </S.InfoSectionHeader>
      </S.HeaderSection>
    </>
  )
}
