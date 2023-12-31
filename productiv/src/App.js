import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import Quote from "./Quote";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


//HERE IS A NEW COMMENT



const INITIAL_TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
    complete: false
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
    complete: false
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
    complete: false
  },
];
/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>Prøductïv</h1>
          <p className="lead">The best name in todo list management.</p>
          <Quote />
        </div>
      </header>

      <section className="container mt-4">
        <TodoApp initialTodos={INITIAL_TODOS} />

        <Footer />
      </section>
    </main>
  );
}

export default App;
