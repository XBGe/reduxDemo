import React from 'react';
import styled from 'styled-components';
import TodoForm  from './components/TodoForm';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import ClearBtn from "./components/ClearBtn"

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #fff;
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
`;


const App = () => {
  return (
    <Container>
      <Header />
      <TodoForm />
      <TodoList />
      <ClearBtn />
      <TotalCompleteItems />
    </Container>
      
    
  )
}

export default App

