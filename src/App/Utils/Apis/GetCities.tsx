import {Cities} from "../Entities/Cities";
import axios, {AxiosResponse} from "axios";

export async function getCities(department:string) {
    try {
        const response = await axios.get<Cities[]>(
            `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${department}&$select=municipio&$group=municipio`
        );
        return response.data;

    }catch (error) {
        console.log(error);
    }
}