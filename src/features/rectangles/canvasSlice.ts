import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { isValidData } from "../utils";
import { ProjectData, ProjectResponse, ResponseError, Status, CanvasState } from "./models";

const emptyProjectData = {
    id: '',
    project: {
        id: '',
        name: '',
        width: 0,
        height: 0,
        items: []
    }
};

const emptyError = {
    error: 0,
    message: ''
}

const initialState: CanvasState = {
    projectData: emptyProjectData,
    status: Status.idle,
    error: emptyError
};

export const fetchProjectById = createAsyncThunk<
    ProjectData, 
    string,
    {    
        rejectValue: ResponseError
    }>(  
    'projects/fetchById', 
    async (projectId, thunkAPI) => {
        const response = await fetch(`https://recruitment01.vercel.app/api/project/${projectId}`);
        if (!response.ok) {
            return thunkAPI.rejectWithValue({error: 1, message: response.statusText});
        }
        const data = (await response.json()) as ProjectData;
        if (!isValidData(data)) {
            return thunkAPI.rejectWithValue({error: 1, message: 'Invalid project data'});
        }
        return data;
    }
)

export const initProject = createAsyncThunk(  
    'projects/init',  
    async () => {    
        const response = await fetch(`https://recruitment01.vercel.app/api/init`);   
        return (await response.json()) as ProjectResponse;
    }
)

export const initAndFetch = createAsyncThunk(  
    'projects/initAndFetch',
    async (_, thunkAPI) => {    
        try {
            const response = await fetch(`https://recruitment01.vercel.app/api/init`);
            const data = (await response.json()) as ProjectResponse;
            thunkAPI.dispatch(fetchProjectById(data.id));
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
      updateProject: (state, action: PayloadAction<ProjectData>) => {
        state.projectData = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProjectById.pending, (state) => {
            state.status = Status.loading;
            state.error = emptyError;
          })
          .addCase(fetchProjectById.fulfilled, (state, action) => {
            state.status = Status.idle;
            state.error = emptyError;
            state.projectData = action.payload;
          })
          .addCase(fetchProjectById.rejected, (state, action) => {
            state.error = action.payload;
            state.projectData = {...emptyProjectData};
          });
      },
});

export const { updateProject } = canvasSlice.actions;

export const selectProject = (state: RootState) => state.canvas.projectData.project;
export const selectStatus = (state: RootState) => state.canvas.status;
export const selectError = (state: RootState) => state.canvas.error;

export default canvasSlice.reducer;