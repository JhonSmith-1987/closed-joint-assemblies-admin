import {JSX} from "react";
import {HomeStyled} from "./Home.Styled";

export interface IHomeScreenProps {
    title?:string;
}

export default function Hcreen({title}:IHomeScreenProps):JSX.Element {
    return (
        <HomeStyled>
            <h1>Home</h1>
        </HomeStyled>
    );
}