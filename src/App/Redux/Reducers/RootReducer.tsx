import {combineReducers} from "redux";
import {clientsReducer} from "./ClientsReducer";
import {departmentsReducer} from "./DepartmentsReducers";
import {citiesReducer} from "./CitiesReducers";
import {showModalReducer} from "./ShowModalReducer";


export type RootState = ReturnType<typeof rootReducer>;

// Combina los reducers en un rootReducer
const rootReducer = combineReducers({
    clients: clientsReducer,
    departments: departmentsReducer,
    cities: citiesReducer,
    showModal: showModalReducer,
});

export default rootReducer;