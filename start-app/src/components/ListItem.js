import React from "react";

class ListItem extends React.Component {

    toggleImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        });
    };

    toggleDone = () => {
        this.setState((state) => {
            return {
                important: false,
                done: !state.done
            }
        });
    };

    render() {

        let classImportant = 'todo-item';

        if(this.props.task.important) {
            classImportant += ' important';
        }

        if(this.props.task.done) {
            classImportant += ' done';
        }

        return (
        <li className={classImportant}>
            <span onClick={this.toggleDone} className="todo-item-text">{this.props.task.title}</span>
            <div className="btn-group">
                <button onClick={() => {this.props.onToggleImportant(this.props.task.id)}} className="btn btn-outline-dark btn-sm">Важное</button>
                <button className="btn btn-outline-danger btn-sm">Удалить</button>
            </div>
        </li>
        );
    }
}

export default ListItem;