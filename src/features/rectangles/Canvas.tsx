import React from "react";
import { Rectangle } from "./models";
import { CanvasRectangle } from "./Rectangle";

export function Canvas(props: {items: Array<Rectangle>, viewData: { width: number, height: number}}) {
    const {width, height} = props.viewData;

    const setViewBox = (width: number, height: number): string => {
        return `0 0 ${width} ${height}`;
    }

    return (
        <svg viewBox={setViewBox(width, height)} width="100%" height="100%">
            {props.items.map((item: Rectangle) => <CanvasRectangle rectData={item}/>)}
        </svg>
    )
}