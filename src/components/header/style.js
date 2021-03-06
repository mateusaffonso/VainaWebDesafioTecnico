import styled from 'styled-components'
import background from './images/backgroundDesktop.png'

export const HeaderSection = styled.header`

  background: url(${background}) no-repeat center;
  background-size: cover;
  width: 100%;
  padding-bottom: 10rem;
  /* height: 100%; */

  figure {
    /* width: fit-content; */
    /* border: 2px solid; */
    position: fixed;
    top: 2rem;
    left: 4rem;
    z-index: 10;
  }

  img {
    width: 7rem;
  }
`

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  ul {
    width: fit-content;
    margin-left: var(--margin-pattern);
    height: 4rem;

    display: flex;
    gap: 6.5rem;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0.4rem;
    font-size: 2rem;

    &:hover {
      border: 3px solid #ffac2d;
      border-radius: 5rem;
      transition: 0.3s;
    }
  }

  a {
    color: #ffffff;
  }
`

export const InfoSectionHeader = styled.div`
  width: 100%;
  margin-top: 8rem;

  
`

export const InfoContentHeader = styled.div` 
  width: 100rem;
  margin-left: var(--margin-pattern);
  h1 {
    font-size:4.5rem;
    color: #FFAC2D;
    margin-bottom: 5rem;
    span {
      color: #FF611E;
    } 
  }


  .RegistrationInfo{
    width: 55rem;
    height: fit-content;
    background-color: #FFFFFF;
    border: 2px solid;
    border-radius: 2rem;
    color: #00145D;
    padding-left: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .Circles{
      width: 87%;
      display: flex;
      gap: .4rem;
      margin: 1rem;
      padding-bottom: 1rem;
      border-bottom: 4px solid #00145D ;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      span{
        width: 1rem;
        height: 1rem;
        background-color: #00145D;
        border-radius: 50%;
      }
    }

    h2{
      font-size: 3.8rem;
      padding-left: 1rem;
    }
    p:nth-last-child(1){
      padding-left: 1rem;
      font-size: 2.5rem;
      font-weight: 300;
      color: #272727;
    }
  }

  p{
    font-size: 2rem;
    color: #FED5B2;
    
  }

`