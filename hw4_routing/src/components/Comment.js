import React from 'react';

import './Style.css';

export default class Comment extends React.Component {
    state = {
        comment: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(response => response.json())
            .then(comment => {
                this.setState({comment})
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.comment && <div>
                        <p>{this.state.comment.name}</p>
                        <p>{this.state.comment.body}</p>
                       
                    </div>
                }
            </div>
        )
    }
}