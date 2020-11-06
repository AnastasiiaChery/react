import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import Post from '../user/Post';

class Posts extends Component {

	_postService = new UserService;

  state={posts: []};


componentDidMount(){
 this._postService.getAllPosts().then(value =>{
 this.setState({posts: value})
 });
}

	render() {
		return (
			<div>
                 {
					this.state.posts.map(value => (<Post
						 item={value}
						 key={value.id}/>))
				 }
			</div>
		);
	}
	
}

export default Posts;