import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledInput, StyledInputContainer, StyledPlaygroundDiv } from "../../styledComponents";
import { Rectangle } from "./models";
import { CanvasRectangle, EdgeType, getBoundEdge } from "./Rectangle";

const MIN_LENGTH = 100;
const MAX_LENGTH = 400;
const MIN_ROTATION = 0;
const MAX_ROTATION = 360;

export function Playground() {
    const [rotation, setRotation] = useState(0);
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(300);

    const getValue = (targetValue: number, minValue: number, maxValue: number): number => {
        if (!targetValue || targetValue < minValue) {
            return minValue;
        } else if (targetValue > maxValue) {
            return maxValue;
        } else {
            return targetValue;
        }
    }

    const handleOnRotationChange = (event: any) => {
        setRotation(getValue(event.target.value, MIN_ROTATION, MAX_ROTATION));
    }

    const handleOnWidthChange = (event: any) => {
        setWidth(getValue(event.target.value, MIN_LENGTH, MAX_LENGTH));
    }

    const handleOnHeightChange = (event: any) => {
        setHeight(getValue(event.target.value, MIN_LENGTH, MAX_LENGTH));
    }

    const rectangle: Rectangle = {
        id: "1",
        width: width,
        height: height,
        x: 300,
        y: 300,
        color: '#33ca90',
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
        <StyledPlaygroundDiv>
            <svg viewBox="0 0 600 600" width="100%" height="100%">
                <CanvasRectangle rectData={rectangle}></CanvasRectangle>
                <text x="-500" y="100" fontSize="1.4em" fill="black">border width</text>
                <text x="-500" y="130" fontSize="1.2em" fill="black">width*cos(alpha) + height*sin(alpha)</text>
                <text x="-300" y="100" fontSize="1.2em" fill="red">{boundaryRectangle.width.toFixed(2)}</text>
                <text x="-500" y="210" fontSize="1.4em" fill="black">border height</text>
                <text x="-500" y="240" fontSize="1.2em" fill="black">width*sin(alpha) + height*cos(alpha)</text>
                <text x="-300" y="210" fontSize="1.2em" fill="red">{boundaryRectangle.height.toFixed(2)}</text>
            </svg>
                <h3>Rotation</h3>
            <StyledInputContainer>
                <input type="range" id="rotation" name="rotation" min="0" max="360" value={rotation} step="1" onChange={handleOnRotationChange}></input>
                <StyledInput type="number" value={rotation} min="0" max="360" onChange={handleOnRotationChange}></StyledInput>
            </StyledInputContainer>
                <h3>Width</h3>
            <StyledInputContainer>
                <input type="range" id="width" name="width" min="100" max="400" value={width} step="1" onChange={handleOnWidthChange}></input>
                <StyledInput type="number" value={width}  min="100" max="400" onChange={handleOnWidthChange}></StyledInput>
            </StyledInputContainer> 
                <h3>Height</h3>
            <StyledInputContainer>
                <input type="range" id="height" name="height" min="100" max="400" value={height} step="1" onChange={handleOnHeightChange}></input>
                <StyledInput type="number" value={height} min="100" max="400" onChange={handleOnHeightChange}></StyledInput>
            </StyledInputContainer>
        </StyledPlaygroundDiv>
        </>
    )
}