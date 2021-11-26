import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
  height: 1.25rem;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  border-radius: 0.25rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
`;
const AlertInfo = styled.p`
  color :red;
`;

const Alert = ({ msg, removeAlert, todos }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [todos]);
  return (
    <Container>
      <AlertInfo >{msg}</AlertInfo> 
    </Container>
    
  );
};

export default Alert;
