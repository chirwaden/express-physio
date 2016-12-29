import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <div className="navigationContainer">
        
            <div className="navigationBarContainer">
                <div className="navigationBar_bar">
                    <div className="navigationBar navigationBar_dasboard">
                        <Link to="/" href="#">Dashboard</Link>
                    </div>
                    <div className="navigationBar navigationBar_clients">
                        <Link to="/clients" href="#">Clients</Link>
                    </div>
                    <div className="navigationBar navigationBar_users">
                        <Link to="/users" href="#">Users</Link>
                    </div>
                    <div className="navigationBar navigationBar_business">
                        <Link to="/business" href="#">Business</Link>
                    </div>
                </div>

                <div className="navigationBar_bar navigationBar_username">
                    <div className="navigationBar ">
                        <a href="#">Jane Appleseed</a>
                    </div>
                </div>
            </div>
        </div>

    );
}