import styled from 'styled-components';

const Main = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: clac(100vh - 60px);
    padding: 0px 0px 0px 0px;
     

    .PageWrapper {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 100vw;
        max-width: 1400px;
        padding: 0px 20px;
        margin: 0px;
        height: calc(100vh - 122px);
        overflow-y:scroll;
    }
    
    .PageLocation {
        flex: 1;
        display: flex;
        justify-content: center;
        width: 100vw;
        color: #FFFFFF;
        background-color:#1E7BB2;
    }

    .PageLocationWrapper {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        width: 100vw;
        max-width: 1400px;
        padding: 0px 16px 16px 16px;
        color: #FFFFFF;
        
    }
`;

export default Main;