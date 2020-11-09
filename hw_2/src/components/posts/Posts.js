import React, {Component} from 'react';
import {UserService} from '../../services/Service';
import Post from '../post/Post';
import Comments from '../comments/Comments';

class Posts extends Component {

	_postService = new UserService;

  state={posts: [],
	item: null,
	comments: []};


	   constructor(props) {
		super(props);
		this.Comments = React.createRef();
	  }
	

componentDidMount(){
 this._postService.getAllPosts().then(value =>{
 this.setState({posts: value})
 });
}


      getPostsByIdApp= (id) => {
	 this.Comments.current.updateTable(id);
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