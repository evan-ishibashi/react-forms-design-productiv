import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";

import EditableTodoList from "./EditableTodoList";


const BlankFormData = {
  title: "",
  description: "",
  id: null,
  priority: 1
}

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {


  const [todos, setTodos] = useState(initialTodos);
  console.log(initialTodos);
  //todos will be like:
  //[{title: 'Code!', description: 'Write some code', priority: 1}];

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(oldTodos => {
      return [...oldTodos, { ...newTodo, id: uuid() }];
    });
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return (todo.id === updatedTodo.id) ? updatedTodo : todo;
      });
    });
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(oldTodos => {
      return oldTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length &&
            <EditableTodoList todos={todos} update={update} remove={remove} />}
          {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todos.length &&
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm initialFormData={BlankFormData} handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;