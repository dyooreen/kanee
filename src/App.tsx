import { Container } from "@chakra-ui/react";
import TodoList from "./Components/TodoList/TodoList";
import CreateTask from "./Components/CreateTask/CreateTask";

function App() {
  return (
    <Container maxW="2xl" alignItems={"center"}>
      <CreateTask />
      <TodoList />
    </Container>
);
}

export default App;
