import React from 'react';

import './Style.css';

export default class Comments extends React.Component {
 state={
     comments:[]
 }
 componentDidMount(){
     
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response => response.json())
     .then(comments=>{
         this.setState({comments})
     })
 }

    render() {
        return (
             <div>
                {this.state.comments.map(comment=>(
                   <div>
                       <p>{comment.name}</p>
                       <p>{comment.body}</p>

                       <button class="but" onClick={() =>  this.props.history.push(`/comments/${comment.id}`) }>ShowMe</button>
                       <hr></hr>
                       
                   </div> 
                ))}
             </div>
        );
    }
}