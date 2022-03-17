import React, { Component } from 'react';
import Item from '../Item'

class index extends Component {
    render() {
        // console.log(this.props.todos)
        const { todos } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} />
                    })
                }
            </ul>
        );
    }
}

export default index;