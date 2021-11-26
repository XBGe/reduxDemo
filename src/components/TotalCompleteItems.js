import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  color: #cc0a34;
`;

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return <Container>Total Complete Items: {todos.length}</Container>;
};

export default TotalCompleteItems;
