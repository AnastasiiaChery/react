import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import Post from '../post/Post';
import Comments from '../comments/Comments';

class Posts extends Component {

	_postService = new UserService;

  state={posts: [],
	item: null,
	comments: []};

	// states={comments: [],
	// 	item: null};

	useId=0;
	


componentDidMount(){
 this._postService.getAllPosts().then(value =>{
 this.setState({posts: value})
 });


}


// getPostsByIdApp = (id) => {this.useId=id
// 		console.log(this.useId)
	
// }

getPostsByIdApp = (id) => {
	let filter = this.state.posts.filter(value => value.id === id);
	console.log(filter);
	this.setState({item: filter});

};




	render() {
		return (
			<div>
                 {
					this.state.posts.map(value => (<Post
						 item={value}
						 key={value.id}
						 getComByIdPost={this.getPostsByIdApp}
						 />))
				 }
				 <Comments/>
			</div>
		);
	}
	
}

export default Posts;