import styled from 'styled-components'

export const MainSection = styled.main`
margin-top: 7rem;
margin-left: var(--margin-pattern);

h2 {
    font-size: 4.8rem;
    color: #0F2260;
  }
`

export const AboutSection = styled.div`
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
export const FormationSection = styled.div`
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

export const TeamSection = styled.div`
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

    img {
      width: 3rem;
      position: relative;
      z-index: 1;
      right: 3.4rem;
      
    }
  }

  .SectionImages {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    margin-top: 2rem;
    color: #FFFFFF;

    div {
      width: 23.28rem;
      height: 25.5rem;

      position: relative;

      .Shadow{
        position: relative;
        z-index: 1;
        box-shadow: 0 0 1rem #0F2260;
        
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
  
      }

      h4,p {
        width: 100%;
        height: fit-content;
        position: absolute;
        z-index: 2;
        text-align: center;
        bottom: 1rem;
        text-shadow: .1rem 0.2rem  #0F2260;

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




export const EventsSection = styled.div`
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