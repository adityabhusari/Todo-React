import { createContext, useContext} from "react";

export const TodoContext = createContext({
        todos: [
            {   
                todo: '',
                completed: false
            }
        ],
        addTodo: (todo) => {},
        updateTodoo: (id, task) => {},
        deleteTodo: (id) => {},
        marked: (id) => {}
    }
);

export const useTodo = () => {
    return useContext(TodoContext);
}   

export const TodoProvider = TodoContext.Provider;