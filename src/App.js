import React from 'react'
import Header from './components/header/index.js'
import Main from './components/main/index.js'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;

    --margin-pattern: 18rem;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`


export default function App () {

  return(
    <>
      <GlobalStyled/>
      <Header />
      <Main />
    </>
  )
}
