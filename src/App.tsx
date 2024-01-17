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

interface Todo {
  id: number;
  text: String;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addItem = (e: any) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      return false;
    }

    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  };
  const deleteItem = (id: Number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <Container maxW="2xl" centerContent alignItems={"center"}>
      <InputGroup size="lg" marginY={"10"}>
        <Input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="what need to do"
        />
        <InputRightElement width="4.5rem">
          <Button onClick={addItem} h="1.75rem" size="sm">
            <AddIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      {todos.map((todo) => (
        <Card key={todo.id} variant={"outline"} width={"100%"} marginY={"4"}>
          <CardBody>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{todo.text}</Text>
              <DeleteIcon onClick={() => deleteItem(todo.id)} boxSize={4} />
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default App;
