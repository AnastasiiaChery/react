import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import Comment from '../comment/Comment';




class Comments extends Component {

	_postService = new UserService;
	

  state={comment: [],
	item: null};
	
	
	constructor(props) {
		super(props);	
		// this.handleClick = this.getPostsByIdApp(this);    	
	}


	componentDidMount(){ 
     this._postService.getAllComments().then(value =>{
	this.setState({comment: value})
    });
  }


  handleClick(){console.log('jgkhv')}
  


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
