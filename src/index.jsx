import React, {Component} from 'react';
import ReactDom from 'react-dom'

import {UsersList} from './components/UsersList'

export class App extends Component {
    state = {
        users: [],
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => {
            this.setState({users});

        });
    }
    render(){
        const {users } = this.state
        return (<div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>)
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root'),
)