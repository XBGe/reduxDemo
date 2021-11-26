import styled from "styled-components"

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`;
const Title = styled.h1`
    font-weight: bold;
`;

const Header = () => {
    return (
        <Head>
            <Title>To Do List</Title>
        </Head>
    )
}

export default Header
