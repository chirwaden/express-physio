import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Table = styled.table`

    width:100%;
    text-align:left;
    border-spacing: 0px;

    
    thead {

        th{
            border-bottom: 1px solid #eaeaea;
            margin:8px 0px;
        };

        tr {
            height: auto;
            cursor: default; 
            &:hover {
                background-color:transparent;
            };
        };
    };

    tbody {
        font-weight: 300;
    };

    tr {
        height: 48px;
        border: 1px solid black;
        
        &:hover {
            background-color:#f8f8f8;
        }

    };

    td {
        border-bottom: 1px solid #eaeaea;
        
        span.avatarInitials {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            text-transform: uppercase;
            width: 40px;
            height: 40px;
            background-color: rgb(71, 82, 93);
            color: rgb(255, 255, 255);
            order: 1;
            border-radius: 20px;
            margin: 5px 0px 5px 16px;
            border-bottom: 1px solid #eaeaea;
            
        };


        
    };

    
`;

export default Table;