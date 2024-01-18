import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTodoContext } from "../../Context/TodoContext";

const TodoList: FC = () => {
  const { todos, deleteTodo } = useTodoContext();
  return (
    <>
      {todos.map((todo) => (
        <Card key={todo.id} variant={"outline"} width={"100%"} marginY={"4"}>
          <CardBody>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{todo.text}</Text>
              <Button>
                <DeleteIcon color={"red"} onClick={() => deleteTodo(todo.id)} boxSize={4} />
              </Button>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
export default TodoList;
