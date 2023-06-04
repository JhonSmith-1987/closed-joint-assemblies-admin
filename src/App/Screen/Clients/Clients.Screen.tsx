import {JSX, useEffect} from "react";
import {ClientsStyled} from "./ClientsStyled";
import {Client} from "../../Utils/Entities/Clients";
import TableComponent from "../../Components/TableComponent/TableComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Reducers/RootReducer";
import {getClients} from "../../Utils/Apis/GetClients";
import {fetchClientsSuccess} from "../../Redux/Actions/ClientsActions";

export interface IClientsScreenProps {
    onclick:(e:string) => void;
}

export default function ClientsScreen({onclick}: IClientsScreenProps): JSX.Element {

    const distpatch = useDispatch();
    const clients = useSelector((state:RootState) => state.clients);

    useEffect(() => {
        getClients().then((res) => {
            if (res !== undefined) {
                distpatch(fetchClientsSuccess(res));
            }
        });
    }, [distpatch]);


    return (
        <ClientsStyled>
            <TableComponent
                color="primary"
                text="Crear cliente"
                clients={clients}
                onclick={onclick}
                tableType="client"
                title="Clientes"
            />
        </ClientsStyled>
    );
}