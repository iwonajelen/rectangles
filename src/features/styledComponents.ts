import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CanvasDiv = styled.div`
    width: auto;
    height: 70%;
    background: white;
    border: 1px solid #777;
    box-shadow: 0 0 20px #ddd;
    margin: 1em;

    @media (max-width: 768px) {
        height: 50%;
    }
`;

export const StyledButton = styled.button`
    padding: 10px 24px;
    background: #55aa88;
    border: none;
    color: black;
    border-radius: 0 7px 7px 0;
    font-size: 1.1em;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px #888 solid;
    border-radius: 7px 0 0 7px;
`;

export const StyledInputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    @media (max-width: 768px) {
        margin: 0;
        width: 100%;
    
        & input[type="number"] {
            width: 30%;
        }
    }
`;

export const StyledPlaygroundDiv = styled.div`
    background: white;
    margin: 2em auto;
    width: 80vw;
    height: 60vh;
    border: 1px solid #777;
    box-shadow: 0 0 20px #ddd;

    @media (max-width: 768px) {
        & h3 {
            margin: 0.3em auto;
        }
    }
`;