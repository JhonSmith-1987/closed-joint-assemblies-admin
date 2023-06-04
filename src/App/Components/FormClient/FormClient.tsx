import React, {JSX, useEffect, useState} from "react";
import {FormClientStyled} from "./FormClientStyled";
import {Department} from "../../Utils/Entities/Department";
import {Cities} from "../../Utils/Entities/Cities";
import axios from "axios";
import {Client} from "../../Utils/Entities/Clients";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Reducers/RootReducer";
import {getDepartments} from "../../Utils/Apis/GetDepartments";
import {fetchDepartmentSuccess} from "../../Redux/Actions/DepartmentsActions";
import {fetchCitiesSuccess} from "../../Redux/Actions/CitiesActions";
import {getCities} from "../../Utils/Apis/GetCities";

export interface IFormClientProps {
    onClick: (option: boolean) => void;
}

export default function FormClient({onClick}: IFormClientProps): JSX.Element {

    const dispatch = useDispatch();
    const departments = useSelector((state: RootState) => state.departments);
    const cities = useSelector((state: RootState) => state.cities);
    const [formData, setFormData] = useState<Client>({
        name: '',
        cc_nit: '',
        address: '',
        department: '',
        city: '',
        email: '',
        password: ''
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        postClient(formData);
    }

    function postClient(objClient: Client) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/postClient',
            headers: {
                'Content-Type': 'application/json'
            },
            data: objClient
        };
        axios.request(config)
            .then((response) => {
                alert(response.data.message);
                onClick(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function handleDataDepartment(event: React.ChangeEvent<HTMLSelectElement>) {
        let data: string = event.target.value;
        getCities(data).then((res) => {
           if (res !== undefined) {
               dispatch(fetchCitiesSuccess(res));
           }
        });
        setFormData((prevFormData) => ({
            ...prevFormData, department: data
        }));
    }
    function handleDataSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        let data: string = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData, city: data
        }));
    }
    function handleDataInput(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }


    useEffect(() => {
        getDepartments().then((res) => {
            if (res !== undefined) {
                dispatch(fetchDepartmentSuccess(res));
            }
        });
    }, [dispatch]);

    return (
        <FormClientStyled>
            <div className="content-button-close">
                <div onClick={() => onClick(false)} className="close">X</div>
            </div>
            <h1>Crear clientes</h1>
            <div className="content-form">
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleDataInput}
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="NIT"
                        required
                        name="cc_nit"
                        value={formData.cc_nit}
                        onChange={handleDataInput}
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="Dirección"
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleDataInput}
                    />

                    <select
                        className="input"
                        required
                        name="department"
                        onChange={handleDataDepartment}
                    >
                        <option>Selecciona un departamento</option>
                        {departments && departments.map((department: Department) => (
                            <option
                                key={department.departamento}
                                value={department.departamento}
                            >
                                {department.departamento}
                            </option>
                        ))}
                    </select>

                    <select
                        className="input"
                        required
                        name="city"
                        onChange={handleDataSelect}
                    >
                        <option>Selecciona una ciudad</option>
                        {cities && cities.map((city: Cities) => (
                            <option
                                value={city.municipio}
                                key={city.municipio}
                            >
                                {city.municipio}
                            </option>
                        ))}
                    </select>
                    <input
                        className="input"
                        type="email"
                        placeholder="Correo electrónico"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleDataInput}
                    />

                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleDataInput}
                    />

                    <button type="submit">
                        Crear cliente
                    </button>
                </form>
            </div>
        </FormClientStyled>
    );
}