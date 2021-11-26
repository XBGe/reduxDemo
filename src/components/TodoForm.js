import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Alert from "./Alert"

import styled from "styled-components";
import {TextField, Button} from "@material-ui/core";


const Container = styled.div`
    display: flex;
`;
const Form = styled.form`
    
    
 
`;

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: '' });

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const showAlert = (show = false, msg = '') => {
    setAlert({ show, msg });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(!value) {
     showAlert(true,  'please enter value')
    } 
    if (value) {
      dispatch(addTodo({ title: value }));
      showAlert(true,  'Item added to list');
      setValue("");
    }

    
    
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} >
        {alert.show && <Alert {...alert} removeAlert={showAlert} todos={todos} />}
        <TextField
          label="To do" 
         variant="outlined"
          size="small"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" >
         Submit
        </Button>
      </Form>
    </Container>
  );
};

export default TodoForm;