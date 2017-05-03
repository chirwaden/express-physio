import React from 'react';
import styled from 'styled-components';
import ButtonsGrey from '../Styles/ButtonsGrey';
import Buttons from '../Styles/Buttons';
import Modal from 'react-awesome-modal';

class ModalR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    
    render() {
        return (
            
            <Modal 
                visible={this.state.visible}
                width="600"
                height="300"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >

            
            </Modal>
        );
    }   
}

export default ModalR;
                        