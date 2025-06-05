import React, { useEffect, useState } from 'react'
import '../components/TodosTable.css';

export default function TodosTable() {
    const [todos, setTodos] = useState([]);
    const getDashboardData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

            const data = await response.json();
            if (response.ok) {
                setTodos(data);
            } else {
                throw new Error('Network response was not ok');

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        getDashboardData()
    }, []);
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
