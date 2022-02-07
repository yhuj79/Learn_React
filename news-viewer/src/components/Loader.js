import styled from "styled-components";
import ReactSpinner from "react-spinners/ScaleLoader";

const Title = styled.h1`
    font-size: 64px; font-weight: bold; color: #3DB7CC;
    margin: 8px; margin-bottom: 96px;
    text-align: center;
`;
const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmptySpace = styled.div`
    width: 300px;
    height: 300px;
`
const Spinner = () => {
    return (
        <Flex>
            <ReactSpinner
                height="180"
                width="30"
                radius="15"
                margin="5"
                color="#3DB7CC"
            />
        </Flex>
    )
};

const Loader = () => {
    return (
        <div>
            <EmptySpace />
            <Title>Loading...</Title>
            <Spinner></Spinner>
        </div>
    );
};

export default Loader;