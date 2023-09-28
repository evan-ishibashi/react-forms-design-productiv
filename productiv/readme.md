
Components

App
    States of: List (Todo/Form)
        Derived => Top Todo
    TodoList
        State: None (just list passed from App)
        List of either: Todo or Form

    (Top) Todo        Props   (Todo element stuff?)
        State: None (just passed in from App)
    (Add) Form     Props   (addTodo function)
        Form State


Todo:       (should have prop for Top? if Top, turn off edit/delete buttons)
