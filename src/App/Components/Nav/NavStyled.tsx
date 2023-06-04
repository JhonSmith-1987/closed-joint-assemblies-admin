import styled from "styled-components";

export const NavStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 20%;
  height: 100vh;
  border-radius: 32px;
  border: 1px solid #61dafb;
  
  .content-img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .6rem;
    border: 1px solid blue;
    border-radius: 50%;

    img {
      height: 4rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: .5rem;
    list-style: none;
  }
  
  
`