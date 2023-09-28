import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority, complete, update }) {

  function handleClick(){
    const newTodo = {
      id,
      title,
      description,
      priority,
      complete : !complete
    }
    update(newTodo);
  }

  return (
    <div className="Todo">
      <div>
        <div onClick={handleClick} >
          {complete ?
            <s><b>{title}</b></s> :
            <b>{title}</b>
          }
        </div>

        <small>(priority: {priority})</small>
      </div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;
