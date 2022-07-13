import styled from 'styled-components'
import backgroundFooter from './images/backgroundFooter.png'

export const FooterSection = styled.footer`
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