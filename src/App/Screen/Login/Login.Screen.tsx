import {JSX} from "react";
import {LoginStyled} from "./Login.Styled";

export interface ILoginScreenProps {
    title?:string;
}

export default function LoginScreen({title}:ILoginScreenProps):JSX.Element {
    return (
        <LoginStyled>
            <h1>Login</h1>
        </LoginStyled>
    );
}