import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
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
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
          onSaveEdit={onSaveEdit}
          editTodoId={editTodoId}
          editTodoText={editTodoText}
          setEditTodoText={setEditTodoText}
        />
      ))}
    </div>
  );
};

export default TodoList;
