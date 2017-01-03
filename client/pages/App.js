import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Dashboard from '../pages/Dashboard/DashboardPage';

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