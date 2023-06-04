import {Department} from "../../Utils/Entities/Department";
import {FETCH_DEPARTMENTS_SUCCESS} from "../Types/DepartmentTypes";

const initialDepartmentState:Department[] = [];


// Reducer para la entidad de departamentos
export const departmentsReducer = (state = initialDepartmentState, action: any) => {
    switch (action.type) {
        case FETCH_DEPARTMENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};