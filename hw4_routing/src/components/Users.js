import React from 'react';
import './Style.css';

export default class Users extends React.Component {

    state = {
        users: []
    }

   

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    render() {
        return (
            <div>
                
                {
                    this.state.users.map(user => (
                          <div>
                              <p>{user.name}</p>
                              <p>{user.username}</p>
                              <p>{user.email}</p>

                              <button class="but" onClick={() => this.props.history.push(`/users/${user.id}`)}>ShowMe</button>
                              <hr/>
                          </div>
                        )
                    )
                }
            </div>
        )
    }
}