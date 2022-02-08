import React from "react";
import { useState, useEffect  } from "react";
const  TodoContext = React.createContext({
    todo: [],
    onAddToDo:()=>{},
    setToDo:()=>{}
})

export const TodoContextProvider =(props)=>{
    const [todo, setToDo] = useState([]);

    const AddToDoHandler = (obj) => {
      setToDo((prevState) => {
        return [
          ...prevState,
          {
            text: obj,
            date: new Date().toLocaleDateString(),
            id: Math.random().toString(),
            completed: false,
          },
        ];
      });
    };
    // console.log(todo)
  
    //
    // Запрос жонотуу бул React'тын жумушу эмес ошондуктан  useEffect колдонулду. 
    // useEffect лучший инструмент для обработки побочных эффектов и это специальный REACT Хук который мы можем использовать.
  
    useEffect(() => {
      const localData = JSON.parse(localStorage.getItem("data"));
      setToDo(localData||[]);
    }, []);
    useEffect(() => {
      localStorage.setItem("data", JSON.stringify(todo));
    }, [todo]);
    console.log(todo);
  

    return(
        <TodoContext.Provider value={{
            onAddToDo: AddToDoHandler,
            todo:todo,
            setToDo:setToDo
        }
           
        } >
            {props.children}
        </TodoContext.Provider>
    )
}
export default  TodoContext
 