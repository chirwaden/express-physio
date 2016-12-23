import React from 'react';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
            
        );
    }
}

export default App;