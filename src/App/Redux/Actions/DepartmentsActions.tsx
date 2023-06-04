import {Department} from "../../Utils/Entities/Department";
import {FETCH_DEPARTMENTS_SUCCESS} from "../Types/DepartmentTypes";

export interface IDepartmentsActions {
    type: typeof FETCH_DEPARTMENTS_SUCCESS,
    payload:Department[]
}

export const fetchDepartmentSuccess = (department: Department[]) => ({
    type: FETCH_DEPARTMENTS_SUCCESS,
    payload: department
});