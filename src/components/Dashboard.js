import React from 'react';
import { logout } from '../utils';

class Dashboard extends React.Component {
    
    handleLogout = (props) => {
        logout();
        this.setState({
            isLogin: false
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>You will redirect to home after success log out</h3>

                <button onClick={() => this.handleLogout()}>Click here to log out</button>
            </div>
        )
    }
};

export default Dashboard;