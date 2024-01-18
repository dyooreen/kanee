import { AddIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useTodoContext } from "../../Context/TodoContext";
import { useState } from "react";

const CreateTask = () => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>("");

  const addItem = (e: any) => {
    e.preventDefault();
    if (newTodo.trim() === "") return false;
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
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
  );
};
export default CreateTask;
