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

function EditableTodoList({todos, update, remove}) {

  function makeEditableTodos(){
    return todos.map(todo => {
      // console.log('todo in map is: ', todo);
      return <EditableTodo todo={todo} update={update} remove={remove}/>
    })
  }

  return (
      <div className="EditableTodoList">
        {makeEditableTodos()}
      </div>
  );
}

export default EditableTodoList;
