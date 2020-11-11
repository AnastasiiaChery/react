import React, {Component} from 'react';
import {Service} from '../../service/Service';
import User from '../user/User';

class Users extends Component {
  
    _userService = new Service;

    state={users: [],
        item: null};
   
   componentDidMount(){
    this._userService.allUsers().then(value =>{
        this.setState({users: value})
        });
       
       }
 
       getOneUserByIdApp = (id) => {
         let userId= id.target.value
		let filter = this.state.users.filter(value => value.name === userId);
        this.setState({item: filter[0]});

        
    };
    
       render() {
        let {item} = this.state;
           return (
               <div>
            <form>
            <select  onChange={this.getOneUserByIdApp}>
            {this.state.users.map(value => (<option key={value.id}>{value.name}</option>))}
             
             </select>
            </form>
            
            {
					item && (<User item={item}/>)
				}
            </div>
           );
       }
    
}

export default Users;