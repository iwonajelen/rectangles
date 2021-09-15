import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Rectangle } from "./models";
import { CanvasRectangle, EdgeType, getBoundEdge } from "./Rectangle";

const StyledInputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledDiv = styled.div`
    background: white;
    margin: 2em auto;
    width: 80vw;
    height: 60vh;
`;


export function Playground() {
    const [rotation, setRotation] = useState(0);
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(300);

    const handleOnRotationChange = (event: any) => {
        setRotation(event.target.value);
    }

    const handleOnWidthChange = (event: any) => {
        setWidth(event.target.value);
    }

    const handleOnHeightChange = (event: any) => {
        setHeight(event.target.value);
    }

    const rectangle: Rectangle = {
        id: "1",
        width: width,
        height: height,
        x: 300,
        y: 300,
        color: '#77deab',
        rotation: rotation
    }

    const boundaryRectangle = {
        ...rectangle,
        width: getBoundEdge(rectangle, EdgeType.width),
        height: getBoundEdge(rectangle, EdgeType.height)
    }

    return (
        <>
        <Link style={{marginTop: "20px"}} to="/">Back</Link>
        <StyledDiv>
            <svg viewBox="0 0 600 600" width="100%" height="100%">
                <CanvasRectangle rectData={rectangle}></CanvasRectangle>
                <text x="-500" y="100" fontSize="1.4em" fill="black">border width</text>
                <text x="-500" y="130" fontSize="1.2em" fill="black">width*cos(alpha) + height*sin(alpha)</text>
                <text x="-300" y="100" fontSize="1.2em" fill="red">{boundaryRectangle.width.toFixed(2)}</text>
                <text x="-500" y="210" fontSize="1.4em" fill="black">border height</text>
                <text x="-500" y="240" fontSize="1.2em" fill="black">width*sin(alpha) + height*cos(alpha)</text>
                <text x="-300" y="210" fontSize="1.2em" fill="red">{boundaryRectangle.height.toFixed(2)}</text>
            </svg>
            <StyledInputContainer>
                <h3> Rotation</h3>
                <input type="range" id="rotation" name="rotation" min="0" max="360" value={rotation} step="1" onChange={handleOnRotationChange}></input>
                <div>{rotation}</div>
                <input type="number" value={rotation} onChange={handleOnRotationChange}></input>
            </StyledInputContainer>
            <StyledInputContainer>
                <h3>Width</h3>
                <input type="range" id="width" name="width" min="100" max="400" value={width} step="1" onChange={handleOnWidthChange}></input>
                <div>{width}</div>
                <input type="number" value={width} onChange={handleOnWidthChange}></input>
            </StyledInputContainer>
            <StyledInputContainer>    
                <h3>Height</h3>
                <input type="range" id="height" name="height" min="100" max="400" value={height} step="1" onChange={handleOnHeightChange}></input>
                <div>{height}</div>
                <input type="number" value={height} onChange={handleOnHeightChange}></input>
            </StyledInputContainer>
        </StyledDiv>
        </>
    )
}