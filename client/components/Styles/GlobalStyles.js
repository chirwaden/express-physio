import { injectGlobal } from 'styled-components';
import styled from 'styled-components';


injectGlobal`
    @font-face {
      font-family: 'Open Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,800');
      src: url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    html{
        box-sizing: border-box;
        height:100vh;
        font-size:16px;
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
        font-weight: 400;
        margin: 0px;
        line-height:28px;
    }
    .subText {
        line-height: 0px;
        margin-bottom: 40px;
        font-weight: 300;
    }


<<<<<<< HEAD
   

/*input[type=checkbox] + .label-text:before{
        content:"OFF";
        cursor:pointer;
        width: 24px;
        height: 24px;
    }

input[type=checkbox]:checked + .label-text:before{
        content:"";
        background-image:url("./images/checkboxOn.svg");
        background-size: 24px 24px;
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        cursor:pointer;
    }*/








=======
>>>>>>> 2b78ba0da48c1880b9d1b3a3fb0019732dbd810e
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
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