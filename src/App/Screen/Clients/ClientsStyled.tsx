import styled from "styled-components";

export const ClientsStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  
  .content-table {
    width: 90%;
    
    h1 {
      text-align: center;
      color: blue;
      font-size: 35px;
      text-transform: uppercase;
    }
    .content-search {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`