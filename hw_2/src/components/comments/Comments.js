import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import Comment from '../comment/Comment';




class Comments extends Component {

	_postService = new UserService;
	

  state={comment: [],
	item: null};
	
	
	componentDidMount(){ 
     this._postService.getAllComments().then(value =>{
	this.setState({comment: value})
    });
  }


  updateTable= (id) =>  {
    console.log("Update Table");
  }
  
  // updateTable = (id) => {
// 	let filter = this.state.comment.filter(value => value.id === id);
// 	console.log(filter);
// 	this.setState({item: filter});
// };


  render() {
		return (
			<div>
                 {
					this.state.comment.map(value => (<Comment
						 item={value}
						 key={value.id}
						
						 />))
				 }
			</div>
		);}
	
	
}
export default Comments;
