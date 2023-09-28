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
    //map function goes here
  }
        // {/*   FIXME  */}
        // <EditableTodo todo=todo update={update} />
        // <EditableTodo />
        // <EditableTodo />
  return (
      <div>
        {makeEditableTodos()}
      </div>
  );
}

export default EditableTodoList;
