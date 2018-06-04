import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <li key={this.props.id} onClick={() => this.props.removeTodoTask(this.props.id)}>{this.props.text}</li>
        )
    }
}

export default Todo;