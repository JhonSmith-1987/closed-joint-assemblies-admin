import axios from "axios";
import {Client} from "../Entities/Clients";

export async function getClients() {
    try {
        const response = await axios.get<Client[]>(
            'http://127.0.0.1:8000/api/getClients'
        );
        return response.data;
    }catch (error) {
        console.log(error);
    }
}