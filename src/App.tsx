import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTodoContext } from "./Context/TodoContext";

function App() {
  const { todos, addTodo, deleteTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>("");

  const addItem = (e: any) => {
    e.preventDefault();
    if (newTodo.trim() === "") return false;
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <Container maxW="2xl" alignItems={"center"}>
      <form>
        <InputGroup size="lg" marginY={"10"} alignItems={"center"}>
          <Input
            onChange={(e) => setNewTodo(e.target.value)}
            height="4.5rem"
            value={newTodo}
            placeholder="what need to do"
          />
          <InputRightElement height="4.5rem" width="4.5rem">
            <Button
              onClick={addItem}
              type="submit"
              height="4.3rem"
              width="4.3rem"
            >
              <AddIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
      {todos.map((todo) => (
        <Card key={todo.id} variant={"outline"} width={"100%"} marginY={"4"}>
          <CardBody>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{todo.text}</Text>
              <Button>
                <DeleteIcon onClick={() => deleteTodo(todo.id)} boxSize={4} />
              </Button>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default App;
