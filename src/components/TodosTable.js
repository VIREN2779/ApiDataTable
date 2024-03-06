import React, { useEffect, useState } from 'react'
import '../components/TodosTable.css';

export default function TodosTable() {
    const[todos , setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    })
  return (
    <div className='todos-container'>
        <div className='todos-heading'>Todos</div>
        <div className='todos-table'>
            <table>
                <thead>
                     <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                     </tr>
                </thead>
                <tbody>
                     {todos.map(todo => (
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? 'true' : 'false'}</td>
                        </tr>

                     ))}
                </tbody>
            </table>
        </div>


    </div>
  )
}
