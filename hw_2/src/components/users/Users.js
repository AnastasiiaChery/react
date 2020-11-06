import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import User from '../user/User';

class Users extends Component {

	_userService = new UserService;

  state={users: []};


componentDidMount(){
 this._userService.getAllUsers().then(value =>{
 this.setState({users: value})
 });
}

	render() {
		return (
			<div>
                 {
					this.state.users.map(value => (<User
						 item={value}
						 key={value.id}/>))
				 }
			</div>
		);
	}
	
}

export default Users;