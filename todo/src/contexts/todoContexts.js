import { useContext, createContext } from "react";

//context
export const TodoContext = createContext({
  //models
  todos: [
    {
      id: 1,
      todo: "Todo",
      completed:false
    },
  ],

  //functionalities
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleTodo:(id)=>{}

});

//use
export const useTodo = () => {
  return useContext(TodoContext);
};

//provider
export const TodoProvider = TodoContext.Provider;
