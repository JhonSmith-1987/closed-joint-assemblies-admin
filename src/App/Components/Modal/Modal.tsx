import {JSX} from "react";
import {ModalStyled} from "./ModalStyled";

export type colorType = 'default' | 'inherit' | 'primary' | 'secondary';
export interface IModalProps {
    title?:string;
}

export default function Modal({title}:IModalProps):JSX.Element {
    return (
        <ModalStyled>

        </ModalStyled>
    );
}