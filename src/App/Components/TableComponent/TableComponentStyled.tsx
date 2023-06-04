import styled from "styled-components";

export interface ITableStyledProps {

}

export const TableComponentStyled = styled.div<ITableStyledProps> `
  width: 100%;
  
  .content-table {
    width: 90%;
    margin: auto;
  }
`