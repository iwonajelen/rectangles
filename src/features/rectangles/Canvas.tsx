import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProjectById, initAndFetch, selectError, selectProject, selectStatus } from "./canvasSlice";
import styled from 'styled-components';
import { SvgContainer } from "./SvgContainer";
import { Status } from "./models";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CanvasDiv = styled.div`
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

const StyledButton = styled.button`
    padding: 10px 24px;
    background: #55aa88;
    border: none;
    color: black;
    border-radius: 0 7px 7px 0;
    font-size: 1.1em;
    cursor: pointer;
    margin-right: 1em;

    &:hover {
        opacity: 0.8;
    }
`;

const StyledInput = styled.input`
    padding: 10px;
    border: 1px #888 solid;
    border-radius: 7px 0 0 7px;
`;

export function Canvas() {
    const project = useAppSelector(selectProject);
    const status = useAppSelector(selectStatus);
    const error = useAppSelector(selectError);
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue) {
            dispatch(fetchProjectById(inputValue));
        } else {
            dispatch(initAndFetch());
        }
    }

    const canvasContent = () => {
        if (status === Status.loading) {
            return <h2>Loading...</h2>
        } else {
            return (
                <>
                    <span style={{margin: '10px auto', fontWeight: 700}}>{project.name}</span>
                    <CanvasDiv>
                        <SvgContainer items={project.items} viewData={{width: project.width, height: project.height}}></SvgContainer>
                    </CanvasDiv>
                </>
            )
        }
    }

    return (
        <StyledDiv>
            <Link to="/playground">Playground</Link>
            <div style={{display: 'flex'}}>
                <StyledInput type="text" placeholder="enter project id" value={inputValue} onChange={(event) => setInputValue(event.target.value)}></StyledInput>
                <StyledButton onClick={handleClick}>Fetch</StyledButton>
            </div>
            {error && error.message ? <h2 style={{color: 'red'}}>{error.message}</h2> : canvasContent()}
        </StyledDiv>
    )
}