import {JSX} from "react";
import {NavStyled} from "./NavStyled";

export interface INavProps {
    title?:string;
}

export default function Nav({title}:INavProps):JSX.Element {
    return (
        <NavStyled>
            <div className="content-img">
                <img src="/img/bosquejo.png"/>
            </div>
            <ul>
                <li>Asistencia</li>
                <li>Votación</li>
                <li>Consulta votación</li>
            </ul>
        </NavStyled>
    );
}