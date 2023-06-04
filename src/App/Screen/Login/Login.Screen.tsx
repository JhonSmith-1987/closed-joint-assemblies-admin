import {JSX} from "react";
import {HomeStyled} from "./Home.Styled";

export interface IHomeScreenProps {
    title?:string;
}

export default function HomeScreen({title}:IHomeScreenProps):JSX.Element {
    return (
        <HomeStyled>

        </HomeStyled>
    );
}