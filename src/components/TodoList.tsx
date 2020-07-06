//@ts-nocheck
import React from 'react'

interface ITodoList {
    todos: any[]
    removeTodo(id: number): void
    changeMarker(id: number): void
}

const TodoList: React.FC<ITodoList> = ({ todos, removeTodo, changeMarker }) => {
            return (
                <div>
                <ul>
                    { todos.map((todo, idx) => {
                        const classes = ['todo']
                        if (todo.completed) {
                            classes.push('completed')
                        }
                        console.log('classes', classes)
                        return (
                            <li className={classes.join(' ')} key={idx} style={{ margin: 10, display: 'flex'}}>
                            <label>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => changeMarker(todo.id)}/>
                                    <span>{todo.title}</span>
                                </label>
                            <button onClick={() => removeTodo(todo.id)}>Delete</button>
                            </li>
                        )}
                        )}
                    </ul>
            </div>
            )
}

export default TodoList