import axios from "axios";
import {Department} from "../Entities/Department";

export async function getDepartments() {
    try {
        const response = await axios.get<Department[]>(
            "https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento&$group=departamento"
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}