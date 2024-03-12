import React from "react";

const Todo = ({
  todo,
  onDelete,
  onEdit,
  onToggleComplete,
  onSaveEdit,
  editTodoId,
  editTodoText,
  setEditTodoText,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => onToggleComplete(todo.id)}
      />
      {editTodoId === todo.id ? (
        <input
          type="text"
          value={editTodoText}
          onChange={(e) => setEditTodoText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}{" "}
      <br />
      {editTodoId === todo.id ? (
        <button onClick={() => onSaveEdit(todo.id)}>Save</button>
      ) : (
        <>
          <button onClick={() => onDelete(todo.id)} disabled={!todo.complete}>
            Delete
          </button>
          <button onClick={() => onEdit(todo.id)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Todo;
