import { fireEvent, render } from "@testing-library/react";
import TodoApp from "../TodoApp";

//Do we need to import each individually?
// import TodoForm from "../TodoForm";
import {TEST_TODOS} from "../_testCommon";
// import { input } from "@testing-library/user-event/dist/types/event";

//smoke test
test("Does it crash?", function (){
  render(<TodoApp initialTodos={TEST_TODOS} />)
})

//snapshot test
test("Making a snapshot", function (){
  const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
  expect(container).toMatchSnapshot();
})


describe("Test form functionality", function (){
  test("Test if blank form displays properly? (for add new form)", function (){
    const {container, debug, queryByText} = render(<TodoApp initialTodos={TEST_TODOS} />);



    const inputTitle = container.querySelector("#newTodo-title");
    const textareaDescription = container.querySelector("#newTodo-description");

    expect(inputTitle.getAttribute("placeholder")).toEqual("Title");
    expect(textareaDescription.getAttribute("placeholder")).toEqual("Description");


    //TODO: don't need to bring this back, but worth knowing that toContainHTML
    //expects a full tag (self enclosed), not just the text inside of that tag.
    //const newTodoForm = container.querySelector(".NewTodoForm");
    // expect(newTodoForm).toContainHTML('placeholder="title"');
    // expect(newTodoForm).toContainHTML('placeholder="description"');
  })

  test("Test if form fields pre-fill properly (for edit form)", function (){
    const {container, debug, queryByText} = render(<TodoApp initialTodos={TEST_TODOS} />);


    const editButton = container.querySelector(".EditableTodo-toggle")

    fireEvent.click(editButton); //opens up form to edit

    const todoForms = container.querySelectorAll(".NewTodoForm");
    expect(todoForms.length).toEqual(2);

    //Select the new edit form.
    const inputTitle = container.querySelector("#newTodo-title");
    const textareaDescription = container.querySelector("#newTodo-description");

    expect(inputTitle.getAttribute("value")).toEqual("Test1");
    expect(textareaDescription.innerHTML).toEqual("Test1 - priority2");
  })

  // test("Test if we can add a new Todo", function (){

  // })

  // test("Test if we can edit an existing Todo", function (){

  // })


})


describe("Editable TodoList tests", function () {
  test("check if get a list of all 3 Todos", function (){
    const {container, debug, queryByText} = render(<TodoApp initialTodos={TEST_TODOS} />);

    const editButtons = container.querySelectorAll(".EditableTodo-toggle")

    expect(editButtons.length).toEqual(3);
  })
})