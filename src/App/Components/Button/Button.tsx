import {JSX} from "react";
import {ButtonStyled} from "./ButtonStyled";
import { Button } from '@material-ui/core';

export type colorType = 'default' | 'inherit' | 'primary' | 'secondary';
export interface IButtonProps {
    title?:string;
    onClick: (e:any) => void;
    text: string;
    color:colorType;
}

export default function ButtonComponent({title, onClick,text,color}:IButtonProps):JSX.Element {
    return (
        <ButtonStyled>
            <Button variant="contained" color={color} onClick={onClick}>
                {text}
            </Button>
        </ButtonStyled>
    );
}