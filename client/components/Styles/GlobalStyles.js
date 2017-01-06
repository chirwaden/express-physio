import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

injectGlobal`
    @font-face {
      font-family: 'Open Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,800');
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    html{
        box-sizing: border-box;
        height:100vh;
        font-size:14px;
    }
    body{
        margin: 0;
    }
    h1 {
        font-size: 32px;
        font-weight: 400;
        margin: 0px;
    }
    h2 {
        font-size: 28px;
        font-weight: 300;
        margin: 0px;
    }
    .subText {
        font-wight: 300;
    }
    label {
        font-size:12px;
        font-weight: 400;
        text-transform: Uppercase;
    }
    input {
        border: 1px solid #9E9E9E;
        color: #47525D;
        font-size: 16px;
        font-weight: 300;
        padding: 14px;
        border-radius: 3px;
        width: 100%;
        margin: 7px 0px 30px 0px;

        &:focus{
            outline:none;
            border: 1px solid #4BBC73;
        }
    }
`

const Wrapper = styled.div`
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: row;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    color: #47525D;
    overflow: hidden;
`;

export default Wrapper;