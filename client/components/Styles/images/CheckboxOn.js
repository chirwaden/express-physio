import React from 'react';
import styled from 'styled-components';


const Style = styled.style`
    .a{
        fill:#fff;stroke:#1e7bbb;
    }
    .b{
        fill:#1e7bbb;
    }
    .c{
        stroke:none;
    }
    .d{
        fill:none;
    }
`;

class CheckOn extends React.Component {
    
    render() {
        return (
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><Style /></defs><g class="a"><rect class="c" width="24" height="24" rx="3"/><rect class="d" x="0.5" y="0.5" width="23" height="23" rx="2.5"/></g><g transform="translate(3 3)"><rect class="b" width="18" height="18"/></g></svg>
        <Style>test</Style>
        );
    }   
}

export default CheckOn;
                        