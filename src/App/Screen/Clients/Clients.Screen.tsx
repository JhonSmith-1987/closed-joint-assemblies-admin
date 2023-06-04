import {JSX} from "react";
import {HomeStyled} from "./Home.Styled";
import Nav from "../../Components/Nav/Nav";
import Table from "../../Components/Table/Table";
import {Route, Switch} from "react-router-dom";

export interface IHomeScreenProps {
    title?:string;
}

export default function HomeScreen({title}:IHomeScreenProps):JSX.Element {

    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
    ];

    const columns = ['ID', 'Name', 'Age'];

    return (
        <HomeStyled>
            <Nav/>
            <div className="content">
                <Switch>
                    <Route path="/home/client"/>
                </Switch>
            </div>
        </HomeStyled>
    );
}