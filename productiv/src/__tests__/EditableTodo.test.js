import { fireEvent, render } from "@testing-library/react";
import Todo from "../Todo";
import {TEST_TODOS} from "../_testCommon";
import EditableTodo from "../EditableTodo";


// TODO: Come back to this test - possibly integration
// //smoke test
// test("Does it crash?", function (){
//   render(<EditableTodo {...todo}/>)
// })

// //snapshot test
// test("Making a snapshot", function (){
//   const { container } = render(<Todo {...todo} />);
//   expect(container).toMatchSnapshot();
// })


// //actual tests
// test("do we see a correct todo?", function (){
//   const { queryByText } = render(<Todo {...todo} />);

//   expect(queryByText("Test1 - priority2")).toContainHTML("<small>Test1 - priority2</small>");
//   expect(queryByText("(priority: 2)")).toContainHTML("<small>(priority: 2)</small>");
// });