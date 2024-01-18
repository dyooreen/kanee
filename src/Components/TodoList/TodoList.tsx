import { FC } from "react";
import { useTodoContext } from "../../Context/TodoContext";
import Task from "../Task/Task";

const TodoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </>
  );
};
export default TodoList;
