import {IShowModalAction} from "../Actions/ShowModalActions";
import {SET_SHOW_MODAL} from "../Types/ShowModalTypes";

const showModalInitialState = {
    showModal: false
};

console.log(showModalInitialState);

export const showModalReducer = (state = showModalInitialState, action: IShowModalAction) => {
    switch (action.type) {
        case SET_SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state;
    }
};

console.log(showModalInitialState);


