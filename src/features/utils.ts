import { ProjectData, Rectangle } from "./rectangles/models";

export const getForegroundColorBasedOnBackground = (bgColor: string): string => {
    var color = bgColor.substring(1, 7);
    var red = parseInt(color.substring(0, 2), 16);
    var green = parseInt(color.substring(2, 4), 16);
    var blue = parseInt(color.substring(4, 6), 16);
    return (((red * 0.299) + (green * 0.587) + (blue * 0.114)) > 186) ?
      "#000000" : "#ffffff";
}

export const isValidData = (data: ProjectData): boolean => {
  return data.project && data.project.items && !data.project.items.some((item: Rectangle) => {
    return !Number.isInteger(item.width) || 
      !Number.isInteger(item.height) || 
      !Number.isInteger(item.rotation);
  });
}