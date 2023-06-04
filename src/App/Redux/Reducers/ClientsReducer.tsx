import {Client} from "../../Utils/Entities/Clients";
import {FETCH_CLIENTS_SUCCESS} from "../Types/ClientsTypes";

const initialClientsState:Client[] = [];


// Reducer para la entidad de clientes
export const clientsReducer = (state=initialClientsState, action:any) => {
    switch (action.type) {
        case FETCH_CLIENTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
};