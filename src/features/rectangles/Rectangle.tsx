import React from "react";
import { getForegroundColorBasedOnBackground } from "../utils";
import { Rectangle } from "./models";

export const enum EdgeType {
    width = 'width',
    height = 'height'
}

export const getBoundEdge = (rectangle: Rectangle, type: EdgeType): number => {
    const rotation = rectangle.rotation - 360*Math.floor(rectangle.rotation/360);
    const width = rectangle.width;
    const height = rectangle.height;
    const cos = Math.abs(Math.cos(Math.PI * rotation / 180));
    const sin = Math.abs(Math.sin(Math.PI * rotation / 180));
    
    return type === EdgeType.height ? width*sin + height*cos : width*cos + height*sin;
}

export function CanvasRectangle(props: {rectData: Rectangle}) {
    const {x, y, width, height, rotation, color} = props.rectData;

    const getRotation = (rotation: number): string => {
        return `rotate(${rotation})`;
    }

    const getTranslate = (x: number, y: number) => {
        return `translate(${x}, ${y})`;
    }

    const getTransform = (rectangle: Rectangle): string => {
        return `${getTranslate(rectangle.x, rectangle.y)} ${getRotation(rectangle.rotation)} ${getTranslate(-rectangle.width/2, -rectangle.height/2)}`;
    }

    const boundaryRectangle = {
        ...props.rectData,
        width: getBoundEdge(props.rectData, EdgeType.width),
        height: getBoundEdge(props.rectData, EdgeType.height)
    }

    const fgColor = getForegroundColorBasedOnBackground(color);

    return (
        <g>
            <rect 
                fill="none" 
                strokeWidth="2" 
                stroke="red" 
                x={x}
                y={y}
                width={boundaryRectangle.width} 
                height={boundaryRectangle.height}
                transform={getTranslate(-boundaryRectangle.width/2, -boundaryRectangle.height/2)}/>
            <rect fill={color} width={width} height={height} transform={getTransform(props.rectData)}/>
            <circle cx={x} cy={y} r="4" fill={fgColor}></circle>
            <text x={x+10} y={y+10} fill={fgColor}>{rotation}&deg;</text>
        </g>
    );
}