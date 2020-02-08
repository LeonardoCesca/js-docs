import styled from "styled-components";

export const CornerContainer = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    border: 0;

    & small {
        position: absolute;
        right: 26px;
        top: 43px;
        color: #fff;
        transform: rotate(44deg);
    }

    @media(max-width: 768px) {
        display: none;
    }
`
