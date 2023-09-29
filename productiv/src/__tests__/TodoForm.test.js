import { fireEvent, render } from "@testing-library/react";
import TodoApp from "../TodoApp";
import {TEST_TODOS} from "../_testCommon";



//smoke test
test("Does it crash?", function (){
  const {container, debug} = render(<TodoApp initialTodos={TEST_TODOS} />)
  debug(container)
})

//snapshot test
// test("Making a snapshot", function (){
//   const { container } = render(<TopTodo todos={TEST_TODOS} />);
//   expect(container).toMatchSnapshot();
// })


// // const nameInput = getByLabelText("Name:");
// // const qtyInput = getByLabelText("Qty:");
// // const submitBtn = queryByText("Add a new item!");

// //actual tests
// test("do we see a correct priority top todo?", function (){
//   const { queryByText } = render(<TopTodo todos={TEST_TODOS} />);

//   expect(queryByText("Test2 - priority1")).toBeInTheDocument();
// })


// test("Do we see a top todo change when priority list is different?", function (){
//   let shorterTodos = [TEST_TODOS[0], TEST_TODOS[2]];
//   const { queryByText } = render(<TopTodo todos={shorterTodos} />);
//   expect(queryByText("Test1 - priority2")).toBeInTheDocument();
// })
