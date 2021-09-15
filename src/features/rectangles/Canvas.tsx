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
    background: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CanvasDiv = styled.div`
    width: auto;
    height: 80%;
    background: white;
    margin: 1em;
`;

const StyledButton = styled.button`
    padding: 10px 24px;
    background: #55aa88;
    border: none;
    color: black;
    border-radius: 7px;
    font-size: 1.1em;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
        opacity: 0.8;
    }
`;

const StyledInput = styled.input`
    padding: 10px;
    border: 1px #888 solid;
    border-radius: 7px;
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
                    <h3>{project.name}</h3>
                    <CanvasDiv>
                        <SvgContainer items={project.items} viewData={{width: project.width, height: project.height}}></SvgContainer>
                    </CanvasDiv>
                </>
            )
        }
    }

    return (
        <StyledDiv>
            <div>
                <StyledInput type="text" placeholder="enter project id" value={inputValue} onChange={(event) => setInputValue(event.target.value)}></StyledInput>
                <StyledButton style={{marginRight: "100px"}} onClick={handleClick}>Fetch</StyledButton>
                <Link to="/playground">Playground</Link>
            </div>
            {error && error.message ? <h2 style={{color: 'red'}}>{error.message}</h2> : canvasContent()}
        </StyledDiv>
    )
}