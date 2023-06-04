import {Cities} from "../../Utils/Entities/Cities";
import {FETCH_CITIES_SUCCESS} from "../Types/CitiesTypes";

export interface ICitiesActions {
    type: typeof FETCH_CITIES_SUCCESS,
    payload: Cities[]
}
export const fetchCitiesSuccess = (cities:Cities[]):ICitiesActions => ({
    type: FETCH_CITIES_SUCCESS,
    payload: cities
});