import {Cities} from "../../Utils/Entities/Cities";
import {FETCH_CITIES_SUCCESS} from "../Types/CitiesTypes";

const initialCitiesState:Cities[] = [];


// Reducer para la entidad de ciudades
export const citiesReducer = (state = initialCitiesState, action: any) => {
    switch (action.type) {
        case FETCH_CITIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};