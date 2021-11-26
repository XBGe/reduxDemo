import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Container>
  );
};

export default TodoList;