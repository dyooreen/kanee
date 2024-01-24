import { FC } from "react";
import { useTodoContext } from "../../Context/TodoContext";
import Task from "../Task/Task";
import { TabList, Tab, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const TodoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <>
      <Tabs isFitted variant="soft-rounded" colorScheme="green">
        <TabList height={"20"} mb="1em">
          <Tab>Today</Tab>
          <Tab>Tomorrow</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {todos
              .filter(
                (todo) => new Date(todo.id).getDate() == new Date().getDate()
              )
              .map((todo) => (
                <Task key={todo.id} {...todo} />
              ))}
          </TabPanel>
          <TabPanel>
            {todos
              .filter(
                (todo) =>
                  new Date(todo.id).getDate() == new Date().getDate() + 1
              )
              .map((todo) => (
                <Task key={todo.id} {...todo} />
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default TodoList;
