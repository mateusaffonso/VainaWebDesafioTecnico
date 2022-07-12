import React from 'react';
import styled from 'styled-components'

import backgroundFooter from './images/backgroundFooter.png'

import IconFacebook from './images/icons/facebook.svg'
import IconInsta from './images/icons/insta.svg'
import IconLinkedin from './images/icons/linkedin.svg'
import IconMedium from './images/icons/medium.svg'
import IconYoutube from './images/icons/youtube.svg'



const FooterSection = styled.footer`
width: 100%;
background: url(${backgroundFooter});
height: 40rem;

padding-left: var(--margin-pattern);
padding-top: 10rem;
margin-top: 15rem;

display: flex;
flex-direction: column;
gap: 5rem;

color: #FFFFFF;

  h2{
    font-size: 5.4rem;

  }

  p {
    font-size: 2rem;
    font-weight: 500;
    width: 40%;
  }

  .sectionSocialLinks {
    width: 62%;

    display: flex;
    gap: 3rem;

    section {
      display: flex;
      justify-content: space-between;
      width: 76%;
    }
  }

  img {
    width: 6.5rem;
  }

`

export default function Footer() {
  return(
    <>
      <FooterSection>
        <h2>Contato</h2>
        <div className='sectionSocialLinks'>
          <p>Siga nossas redes sociais e fique conectado com todas as novidades.</p>
          <section>
            <a href='https://www.facebook.com/vainaweb/' target='_blanck'><img src={IconFacebook} alt=' ícone do Facebook'/></a>
            <a href='https://www.instagram.com/vainaweb/' target='_blanck'><img src={IconInsta} alt='Ícone do Instagram'/></a>
            <a href='https://www.linkedin.com/company/vainaweb/' target='_blanck'><img src={IconLinkedin} alt='Ícone do Linkedin'/></a>
            <a href='https://medium.com/@olavainaweb' target='_blanck'><img src={IconMedium} alt='Ícone do Medium'/></a>
            <a href='https://www.youtube.com/c/VaiNaWeb' target='_blanck'><img src={IconYoutube} alt='Ícone do Youtube'/></a>
          </section>
        </div>
      </FooterSection>
    </>
  );
}
