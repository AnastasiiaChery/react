import React from 'react';

import './Style.css';

export default class Posts extends React.Component {
 state={
     posts:[]
 }
 componentDidMount(){
     
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(posts=>{
         this.setState({posts})
     })
 }

    render() {
        return (
             <div>
                {this.state.posts.map(post=>(
                   <div>
                       <p>{post.title}</p>
                       <p>{post.body}</p>

                       <button class="but" onClick={() =>  this.props.history.push(`/posts/${post.id}`) }>ShowMe</button>
                       <hr></hr>
                       
                   </div> 
                ))}
             </div>
        );
    }
}