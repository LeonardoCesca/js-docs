import styled from "styled-components";

export const CornerContainer = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    border: 0;
    background: transparent;

    & svg { 
        fill: transparent;
        color: #fff;
        position: absolute;
        top: 0;
        border: 0;
        right: 0;
        
        path:nth-child(2)  {
            animation: tail 1s ease-in-out infinite alternate;
        }
    }

    @keyframes tail {
        to {
            transform: translate(5px, 6px);
        }
    }
  
    @media(max-width: 768px) {
        display: none;
        
        & a {
            display: none; 
            
            & svg {
                display: none;
            }
        }
    }

    & small {
        position: absolute;
        right: 26px;
        top: 43px;
        color: #fff;
        transform: rotate(44deg);
    }

`
