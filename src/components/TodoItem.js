import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo } from "../redux/todoSlice";

import styled from "styled-components";
import {Checkbox} from "@material-ui/core";
import {DeleteForever} from "@material-ui/icons";

const Container = styled.div`
    border:2px solid blue;
    border-radius: 0.25rem;
    margin: 0 0 1px
 
  
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    transition: all 0.3s linear;

`;

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(toggleCompleted({ id, completed: !completed }));
  };
  const handleDeleted = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <Container >
      <Wrapper >
        <Checkbox 
          checked={completed}
          onChange={handleCompleted}
        />
        {title}
        <DeleteForever  onClick={handleDeleted} style={{cursor: 'pointer'}}/>
      
      </Wrapper>
    </Container>
  );
};

export default TodoItem;
