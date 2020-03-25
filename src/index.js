import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    // this binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
}

function Greeting(props) {
    const isLoggedin = props.isLoggedIn;
    if (isLoggedin) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick = {props.onClick}>
        Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick = {props.onClick}>
        Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
            <p>{isLoggedIn}</p>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            </div>
        );

    }
}


ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
