import React from 'react';
import * as S from './style'


import IconFacebook from './images/icons/facebook.svg'
import IconInsta from './images/icons/insta.svg'
import IconLinkedin from './images/icons/linkedin.svg'
import IconMedium from './images/icons/medium.svg'
import IconYoutube from './images/icons/youtube.svg'





export default function Footer() {
  return(
    <>
      <S.FooterSection id='ContactsId'>
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
      </S.FooterSection>
    </>
  );
}
