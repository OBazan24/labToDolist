import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Build a Todo List", complete: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        { id: todos.length + 1, text: newTodo, complete: false },
        ...todos,
      ]);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setEditTodoId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodoText(todoToEdit.text);
  };

  const handleSaveEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editTodoText } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoText("");
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggleComplete={handleToggleComplete}
        onSaveEdit={handleSaveEdit}
        editTodoId={editTodoId}
        editTodoText={editTodoText}
        setEditTodoText={setEditTodoText}
      />
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo Item</button>
      </div>
    </div>
  );
};

export default App;
