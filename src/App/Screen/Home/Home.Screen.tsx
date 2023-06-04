import React, {JSX, useState} from "react";
import {HomeStyled} from "./Home.Styled";
import {connect, useDispatch, useSelector} from 'react-redux';
import Nav from "../../Components/Nav/Nav";
import {Redirect, Route, Switch} from "react-router-dom";
import ClientsScreen from "../Clients/Clients.Screen";
import FormClient from "../../Components/FormClient/FormClient";
import {IShowModalAction, setShowModal} from "../../Redux/Actions/ShowModalActions";
import {RootState} from "../../Redux/Reducers/RootReducer";

export type formModal = 'client' | 'user' | '';

export interface IHomeScreenProps {

}

function HomeScreen({}: IHomeScreenProps): JSX.Element {

    const dispatch = useDispatch();
    const showModal = useSelector((state: RootState) => state.showModal.showModal);
    const [showFormModal, setShowFormModal] = useState<formModal>('');


    function handleOnClickButtonShowModal(e: string) {
        if (e === 'Clientes') {
            dispatch(setShowModal(true));
            setShowFormModal('client');
        }
    }
    function handleOnClickButtonCloseModal(option: boolean) {
        dispatch(setShowModal(option));
    }

    return (
        <HomeStyled>
            <Nav/>
            {showModal && showFormModal === 'client' &&
                <div className="modal">
                    <FormClient onClick={handleOnClickButtonCloseModal}/>
                </div>
            }
            <div className="content">
                <Switch>
                    <Route path="/home/client"
                           children={<ClientsScreen
                               onclick={handleOnClickButtonShowModal}
                           />}
                    />
                    <Redirect to="/home/client"/>
                </Switch>
            </div>
        </HomeStyled>
    );
}

const mapStateToProps = (state: { showModal: { showModal: any; }; }) => {
    return {
        showModal: state.showModal.showModal
    };
};
const mapDispatchToProps = (dispatch: (arg0: IShowModalAction) => any) => {
    return {
        setShowModal: (showModal: boolean) => dispatch(setShowModal(showModal))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);