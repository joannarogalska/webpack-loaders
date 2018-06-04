import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo';

class TodoList extends React.Component {

    render() {
        return (
            <ul className={style.TodoList}>
                {this.props.data.map((data) => {
                    return <Todo key={data.id} id={data.id} text={data.text} removeTodoTask={() => this.props.removeTask(data.id)}/>
                })}
            </ul>
        )
    }
}

export default TodoList;