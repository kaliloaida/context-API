import classes from "./ToDo.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import TodoContext from "../../context";

const ToDo = () => {
  const ctxData = useContext(TodoContext);
  const DeleteToDoHandler = (event) => {
    ctxData.setToDo((prevState) => {
      const updateTodo = prevState.filter(
        (todo) => todo.id !== event.target.id
      );

      return updateTodo;
    });
  };
  // const DeleteToDoHandler = (event) =>{
  //   ctxData.setToDo(ctxData.todo.filter(el=> el.id !== event.target.id))

  //}
  const CheckedToDoHandler = (event) => {
    ctxData.setToDo(
      ctxData.todo.map((el) => {
        if (el.id == event.target.id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  };

  return (
    <Card className={classes.todo}>
      {ctxData.todo.map((todo) => {
        return (
          <Card
            className={classes.todo_li}
            onDelete={ctxData.onDeleteItem}
            key={todo.id}
          >
            <input
              type="checkbox"
              id={todo.id}
              onChange={CheckedToDoHandler}
              checked={todo.completed}
            />
            <li
              className={`${todo.completed ? classes.completed : ""}`}
              id={todo.id}
            >
              {todo.text}
            </li>
            <span className={classes.date}>{todo.date}</span>
            <button onClick={DeleteToDoHandler} id={todo.id} type="button">
              Delete
            </button>
          </Card>
        );
      })}
    </Card>
  );
};
export default ToDo;
