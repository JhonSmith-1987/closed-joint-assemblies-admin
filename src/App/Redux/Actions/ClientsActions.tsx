import {Client} from "../../Utils/Entities/Clients";
import {FETCH_CLIENTS_SUCCESS} from "../Types/ClientsTypes";

export interface IClientsActions {
    type: typeof FETCH_CLIENTS_SUCCESS,
    payload:Client[]
}
export const fetchClientsSuccess = (clients:Client[]):IClientsActions => ({
    type:FETCH_CLIENTS_SUCCESS,
    payload: clients
});