
import React, {useState} from 'react'

interface ITodoForm{
    addTodo(id: string): void
}

const TodoForm: React.FC<ITodoForm> = ({ addTodo}) => {

    const [ value, setValue ] = useState<string>('')

    const handlerForm = (e: React.FormEvent) => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
    return (
        <form onSubmit={handlerForm} className="input-field" style={{margin: 10, display: 'flex'}}>
            <input
                style={{ marginRight: 10}}
                type="text"
                placeholder="New todo"
                value={value}
                onChange={e => setValue(e.target.value)}/>
            <button className="button-small">Submit</button>
        </form>
    )
}

export default TodoForm