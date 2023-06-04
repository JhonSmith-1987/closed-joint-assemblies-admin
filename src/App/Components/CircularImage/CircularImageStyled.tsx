import styled from "styled-components";

export interface ICircularLogoStyledProps {
    height:string;
    externalBackground:string;
    internalBackground:string;
}

export const CircularImageStyled = styled.div<ICircularLogoStyledProps> `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .19rem;
  background: ${(props)=> props.externalBackground};
  border-radius: 50%;
  
  .inner-circle {
    background: ${(props) => props.internalBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border-radius: 50%;
    
    img {
      height: ${(props) => props.height};
    }
  }
`