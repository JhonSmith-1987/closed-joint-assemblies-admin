import {SET_SHOW_MODAL} from "../Types/ShowModalTypes";

export interface IShowModalAction {
    type: typeof SET_SHOW_MODAL;
    payload: boolean
}

export const setShowModal = (showModal:boolean):IShowModalAction => ({
    type: SET_SHOW_MODAL,
    payload: showModal
});