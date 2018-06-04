import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.data.map((data) => {
                    return <li key={data.id} onClick={() => this.props.removeTask(data.id)}>{data.text}</li>
                })}
            </ul>
        )
    }
}

export default TodoList;