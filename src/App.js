import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatDashboard from "./ChatDashboard";


class App extends Component {
    state = {
        messages: [
            {username: 'Himanshu', text: 'Hi, Shekhar!'},
            {username: 'Himanshu', text: 'How are you?'},
            {username: 'Shekhar', text: 'Hi, Himanshu! Good, you?'},
        ],
        users: [{username: 'Himanshu'}, {username: 'Shekhar'}]
    };

    updateMessageListing = (message) => {
        let update_messages_list = this.state.messages
        update_messages_list.push(message)

        this.setState({
            messages: update_messages_list,
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    {
                        this.state.users.map(user => (
                            <ChatDashboard
                                key={user.username}
                                user={user}
                                updateMessages={this.updateMessageListing}
                                messages={this.state.messages}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
