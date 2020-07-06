import React, { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const Home: React.FC = () => {

    interface ITodo{
        id: number
        title: string
        completed: boolean
    }
    const [ todos, setTodos ] = useState<ITodo[]>([])

    useEffect( () => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(saved)
    }, [])

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addItem = (title: string) => {
        const newItem: ITodo  = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(prev => [...prev, newItem])
    }

    const removeItem = (id: number) => {
        setTodos(prev => prev.filter( todo => todo.id !== id))
    }

    const toggleItem = (id: number) => {
        setTodos( todos.map( todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed

            }
            return todo
        }))
    }

    return (
        <div>
            <h1>Home</h1>
            <TodoForm addTodo={addItem} />
            <TodoList todos={todos} removeTodo={removeItem} changeMarker={toggleItem}/>
        </div>

    )
}

export default Home