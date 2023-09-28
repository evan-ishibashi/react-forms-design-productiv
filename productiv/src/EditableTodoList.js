import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  // Maps through list of todos to make editable todo components
  function makeEditableTodos() {
    return todos.map(todo => {
      return <EditableTodo key={todo.id} todo={todo} update={update} remove={remove} />;
    });
  }

  return (
    <div className="EditableTodoList">
      {makeEditableTodos()}
    </div>
  );
}

export default EditableTodoList;
