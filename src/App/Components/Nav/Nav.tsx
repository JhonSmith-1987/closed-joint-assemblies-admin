import {JSX} from "react";
import {NavStyled} from "./NavStyled";
import CircularImage from "../CircularImage/CircularImage";
import {Link} from "react-router-dom";

export interface INavProps {
    title?:string;
}

export default function Nav({title}:INavProps):JSX.Element {
    return (
        <NavStyled>
            <CircularImage
                src="/img/bosquejo.png"
                height="2rem"
                externalBackground="blue"
                internalBackground="#fff"
            />
            <ul>
                <li>Asistencia</li>
                <li>Votación</li>
                <li>Consulta votación</li>
                <Link to="/home/client">
                    <li>Clientes</li>
                </Link>
            </ul>
        </NavStyled>
    );
}