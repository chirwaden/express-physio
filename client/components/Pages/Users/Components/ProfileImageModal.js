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

const ImageWrapper = styled.div`

    display: flex;
    align-items: center;

    a {
        margin-left: 32px;
        text-decoration: none;

        &:hover {
            color: #00569E;
            text-decoration: underline;
        }

        &:visited {
            color: #0073D2;

        }
    }

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


class ProfileImageModal extends React.Component {

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

                <ImageWrapper>
                    <p>Profile Image Here</p>
                    <a href="#" onClick={() => this.openModal()}>Change</a>
                </ImageWrapper>
                <Wrapper>
                    <Modal className="modalDimentions" visible={this.state.visible} width="600px" height="216px" effect="fadeInDown">
                        <FormWrapper>
                        <h2>Change your avatar</h2>
                            <FormContent>
                            <p>Content yet to be added...</p>
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


export default ProfileImageModal;