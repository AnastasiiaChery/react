import React from 'react';

import './Style.css';

export default class Post extends React.Component {
    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(post => {
                this.setState({post})
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.post && <div>
                        <p>{this.state.post.title}</p>
                        <p>{this.state.post.body}</p>
                       
                    </div>
                }
            </div>
        )
    }
}