import {JSX} from "react";
import {CircularImageStyled} from "./CircularImageStyled";

export interface ICircularImageProps {
    src:string;
    height:string;
    externalBackground:string;
    internalBackground:string;
}

export default function CircularImage({
      src,
      height,
      externalBackground,
      internalBackground
}:ICircularImageProps):JSX.Element {
    return (
        <CircularImageStyled
            height={height}
            externalBackground={externalBackground}
            internalBackground={internalBackground}>

            <div className="inner-circle">
                <img src={src}/>
            </div>
        </CircularImageStyled>
    );
}