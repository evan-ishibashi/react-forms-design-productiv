import React from "react";
import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  let topTodo = todos.reduce((acc, cur) => {
    return cur.priority < acc.priority ? cur : acc;
  }, todos[0]);

  return <Todo
    title={topTodo.title}
    description={topTodo.description}
    priority={topTodo.priority}
  />;
}

export default TopTodo;