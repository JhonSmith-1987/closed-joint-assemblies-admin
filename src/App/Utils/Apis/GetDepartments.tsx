import axios from "axios/index";
import {Cities} from "../Entities/Cities";
import { useSelector, useDispatch } from 'react-redux';
import {fetchDepartmentSuccess} from "../../Redux/Actions/DepartmentsActions";

export function getCities(department:string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${department}&$select=municipio&$group=municipio`,
        headers: { }
    };
    axios.request(config)
        .then((response) => {
            let data:Cities[] = response.data;
            dispatch(fetchDepartmentSuccess(data));
        })
        .catch((error) => {
            console.log(error);
        });
}