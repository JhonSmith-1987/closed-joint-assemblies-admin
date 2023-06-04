import styled from "styled-components";

export const HomeStyled = styled.div `
  display: flex;
  
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #282c3499;
    z-index: 22;
  }
  
  .content {
    width: 80%;
    height: 100vh;
  }
`