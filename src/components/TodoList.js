import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {

    render() {
        return (
            <ul className={style.TodoList}>
                {this.props.data.map((data) => {
                    return <li key={data.id} onClick={() => this.props.removeTask(data.id)}>{data.text}</li>
                })}
            </ul>
        )
    }
}

export default TodoList;