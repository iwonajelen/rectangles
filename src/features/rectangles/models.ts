
export interface ResponseError {  
    error: number,
    message: string
}

export enum Status {
    idle = 'idle',
    loading = 'loading',
    failed = 'failed'
}

export interface ProjectResponse {
    id: string,
    name: string,
    modified: number
}

export interface ProjectData {
    id: string
    project: Project
}

export interface Project {
    id: string,
    name: string,
    width: number,
    height: number,
    items: Array<Rectangle>
}

export interface Rectangle {
    id: string,
    color: string,
    rotation: number,
    x: number,
    y: number,
    width: number,
    height: number
};

export interface CanvasState {
    projectData: ProjectData,
    status: Status,
    error: ResponseError | undefined
};