import React from 'react';
import styled from 'styled-components';
import checkOn from './Images/checkboxOn.svg';



const Label = styled.label`
    
    input[type=checkbox] {
        display: none;
    }

    .label-text:before{
        margin-left:16px;
    }

    input[type=checkbox] + .label-text:before{
        content:"..";
        color: #FFFFFF;
        border: solid 1px #E2E4E6;
        border-radius: 3px;
        padding: 0px 4px;
        background-clip: content-box; /* support: IE9+ */
        background-color: transparent;
        cursor:pointer;
        font-size: 14px;
        letter-spacing: 0.7px;
        margin-bottom:8px;
    }

    input[type=checkbox]:checked + .label-text:before{
        content:"{checkOn}";
        color: #007EE5;
        border: solid 1px #007EE5;
        border-radius: 3px;
        padding: 1px 1px;
        background-clip: content-box; /* support: IE9+ */
        background-color: #007EE5;
        cursor:pointer;
        font-size: 12px;
        letter-spacing: -0.4px;
        margin-bottom:8px;
        
    }

`;

class Checkbox extends React.Component {
    
    render() {
        return (
            <Label>
                <input type="checkbox"></input>
                <span className="label-text"></span>
            </Label>
        );
    }   
}

export default Checkbox;
                        