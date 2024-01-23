import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import Todo from "../interfaces/Todo";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateText: (id: number, text: string) => void;
  updateIsCompleted: (id: number, isCompleted: boolean) => void;
}
const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getInitialState = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  };
  const [todos, setTodos] = useState<Todo[]>(getInitialState);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, isCompleted: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateIsCompleted = (id: number, isCompleted: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted } : todo
      )
    );
  };

  const updateText = (id: number, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateText, updateIsCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
