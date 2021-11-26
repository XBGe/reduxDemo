import styled from "styled-components";

import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodos} from "../redux/todoSlice"

const Container = styled.div`
    margin : 1rem 0;
`;



const ClearBtn = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const handleClear = () => {
        dispatch(deleteTodos())
    }

    return (
        <>
            {todos.length > 0 && (
                <Container>
                    <Button  variant="contained" color="secondary" onClick={handleClear}>Clear all</Button>
                </Container>
            )}  
        </>
    )
}

export default ClearBtn
