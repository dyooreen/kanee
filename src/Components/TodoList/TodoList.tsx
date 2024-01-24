import { FC } from "react";
import { useTodoContext } from "../../Context/TodoContext";
import Task from "../Task/Task";
import { TabList, Tab, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const TodoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <>
      <Tabs
        isFitted
        defaultIndex={1}
        variant="soft-rounded"
        colorScheme="green"
      >
        <TabList height={"20"} mb="1em">
          <Tab>
            <ChevronLeftIcon boxSize={7} />
          </Tab>
          <Tab>Today</Tab>
          <Tab>
            <ChevronRightIcon boxSize={7} />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {todos
              .filter(
                (todo) =>
                  new Date(todo.id).getDate() == new Date().getDate() - 1
              )
              .map((todo) => (
                <Task key={todo.id} {...todo} />
              ))}
          </TabPanel>
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
