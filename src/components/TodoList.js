import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
