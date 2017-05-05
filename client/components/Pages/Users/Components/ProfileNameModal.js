import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Input from '../../../Styles/InputFields';
import styled from 'styled-components';
import Button from '../../../Styles/Buttons';


const Wrapper = styled.div `
   
   
   > .modalDimentions {
       flex: 1;
    display: flex;
    width: 100%;
    max-width: 200px;
   } 

`;

const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
  
    flex-direction: column;
    width: 100%;
    padding: 32px;
`;

const FormContent = styled.div`

    margin-top: 32px;

`;

const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

     .modalStyle {
        margin-right:16px;
    }

`;


class ProfileNameModal extends React.Component {

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
            <section>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Wrapper>
                    <Modal className="modalDimentions" visible={this.state.visible} width="600px" height="344px" effect="fadeInDown">
                        <FormWrapper>
                        <h2>Change your name</h2>
                            <FormContent>
                            <label>First Name</label>
                            <Input />
                            <label>Last Name</label>
                            <Input />
                            <ButtonWrapper>
                                <Button className="modalStyle" href="javascript:void(0);" onClick={() => this.closeModal()}>Cancel</Button>
                                <Button href="javascript:void(0);" onClick={() => this.closeModal()} primary>Change Name</Button>
                            </ButtonWrapper>
                            </FormContent>
                        </FormWrapper>
                    </Modal>
                </Wrapper>
            </section>
        );
    } 
}


export default ProfileNameModal;