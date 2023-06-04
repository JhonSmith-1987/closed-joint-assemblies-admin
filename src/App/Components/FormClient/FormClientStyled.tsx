import styled from "styled-components";

export const FormClientStyled = styled.div `
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  width: 60%;
  border-radius: 10px;
  padding: 1em 0 4em;
  
  .content-button-close {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 1em 2em;
    
    .close {
      font-size: 1.1em;
      cursor: pointer;
    }
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: blue;
  }
  .content-form {
    width: 80%;
    margin: auto;
    
    form {
      display: flex;
      flex-direction: column;

      .input {
        margin-bottom: .5em;
        font-size: 1em;
      }
    }
  }
`