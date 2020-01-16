import styled from 'styled-components';

export const ContainerMenu = styled.aside`
    width: 20%;
    background-color: #ffecec;
    padding-top: 50px;

    & a {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        letter-spacing: 0.1em;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Linkao = styled.div`
    display: flex;
`;

export const Title = styled.p`
    display: flex;
    justify-content: center;
    font-weight: bold;
    width: 100%;
`;

export const ContainerContent = styled.div`
    display: flex;
    height: 100vh;
    overflow-y: scroll;
`;