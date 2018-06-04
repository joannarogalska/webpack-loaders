import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            error: ''
        }
    }

    handleValue (value) {
        this.setState({
            value: value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        if (this.state.value){
            this.props.addTodo(this.state.value);
            this.setState({
                value: '',
                error: ''
            });
        } else {
            this.setState({
                error: true
            });
        }
    }

    render() {
        return (
            <form className={style.TodoForm} onSubmit={(event)=>this.handleSubmit(event)}>
                <input type="text" value={this.state.value} onChange={(event)=>this.handleValue(event.target.value)} />
                <button type="sumbit">Dodaj nowy task</button>
                {this.state.error &&<span>Pole musi być wypełnione</span>}
            </form>
        )
    }
}

export default TodoForm;