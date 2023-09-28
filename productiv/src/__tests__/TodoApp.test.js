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
    const {container, queryByText, debug} = render(<TodoApp initialTodos={TEST_TODOS} />);

    const editButton = container.querySelector(".EditableTodo-toggle")

    fireEvent.click(editButton);

    const todoForms = container.querySelectorAll(".NewTodoForm");
    expect(todoForms.length).toEqual(2);

    //Select the new edit form.
    const inputTitle = container.querySelector("#newTodo-title");
    const textareaDescription = container.querySelector("#newTodo-description");

    expect(inputTitle.getAttribute("value")).toEqual("Test1");
    expect(textareaDescription).toHaveTextContent("Test1 - priority2");
  })

  test("Test if we can add a new Todo", function (){
    const {container, queryByText, debug} = render(<TodoApp initialTodos={TEST_TODOS} />);

      // new todo doesn't exist yet
    expect(queryByText("Test4 - priority2")).not.toBeInTheDocument();

    const titleField = container.querySelector("#newTodo-title");
    const descField = container.querySelector("#newTodo-description");
    const priorityField = container.querySelector("#newTodo-priority");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn");

    //fill out the form
    fireEvent.change(titleField, {target: {value: "Test4"}})
    fireEvent.change(descField, {target: {value: "Test4 - priority2"}});
    fireEvent.change(priorityField, {target: {value: 2}});
    fireEvent.click(submitBtn);

    //new todo exists
    expect(queryByText("Test4 - priority2")).toBeInTheDocument();

    const allTodos = container.querySelectorAll(".Todo");
    expect(allTodos.length).toEqual(5);
  })

  test("Test if we can edit an existing Todo", function (){
    const {container, queryByText, debug} = render(<TodoApp initialTodos={TEST_TODOS} />);

    const editButton = container.querySelector(".EditableTodo-toggle");

    fireEvent.click(editButton);

    const titleField = container.querySelector("#newTodo-title");
    const descField = container.querySelector("#newTodo-description");
    const priorityField = container.querySelector("#newTodo-priority");

    // debug(priorityField);

    expect(titleField.getAttribute("value")).toEqual("Test1");
    expect(descField).toHaveTextContent("Test1 - priority2");
    expect(priorityField).toHaveValue("2");

    //TODO: below doesn't work. getAttribute value does not seem to reveal stuff
    //for select items, even though we explicitly set it in react.
    //expect(priorityField.getAttribute(value)).toEqual(2);

    //This works, but I don't think it can tell us which is the current priority
    //expect(priorityField).toContainHTML('<option value="1">Ultra-Über</option>');


    fireEvent.change(titleField, {target : {value: "Test1 EDITED"}});
    fireEvent.change(descField, {target : {value: "Test1 - priority1 EDITED"}});
    fireEvent.change(priorityField, {target : {value: "1"}});
    //fireEvent for priority needed too, but we cant target value?

    const submitBtn = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(submitBtn);

    expect(titleField.getAttribute("value")).toEqual("Test1 EDITED");
    expect(descField).toHaveValue("Test1 - priority1 EDITED");
    expect(priorityField).toHaveValue("1");


    // //Check whether TopTodo has changed after submit

    // const allTodoTitles = container.querySelectorAll("#newTodo-title");

    // const newTodoTitles = [...allTodoTitles].filter(title => {
    //   let currVal = title.getAttribute("value");
    //   console.log("currVal is", currVal);
    //   return (currVal === "Test1 Edited");
    // })

    // console.log(allTodoTitles)
  })


})


describe("Editable TodoList tests", function () {
  test("check if get a list of all 3 Todos", function (){
    const {container, debug, queryByText} = render(<TodoApp initialTodos={TEST_TODOS} />);

    const editButtons = container.querySelectorAll(".EditableTodo-toggle")

    expect(editButtons.length).toEqual(3);
  })
})