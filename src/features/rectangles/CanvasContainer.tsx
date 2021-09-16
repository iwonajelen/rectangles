import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProjectById, initAndFetch, selectError, selectProject, selectStatus } from "./canvasSlice";
import { Canvas } from "./Canvas";
import { Status } from "./models";
import { Link } from "react-router-dom";
import { CanvasDiv, StyledButton, StyledDiv, StyledInput } from "../styledComponents";

export function CanvasContainer() {
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
                        <Canvas items={project.items} viewData={{width: project.width, height: project.height}}></Canvas>
                    </CanvasDiv>
                </>
            )
        }
    }

    return (
        <StyledDiv>
            <Link to="/playground">Playground</Link>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <StyledInput type="text" placeholder="enter project id" value={inputValue} onChange={(event) => setInputValue(event.target.value)}></StyledInput>
                <StyledButton onClick={handleClick}>Fetch</StyledButton>
            </div>
            {error && error.message ? <h2 style={{color: 'red'}}>{error.message}</h2> : canvasContent()}
        </StyledDiv>
    )
}