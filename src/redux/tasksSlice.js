// src/redux/tasksSlice.js
import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    tasks: [{
            id: 1,
            title: "Create project structure",
            description: "Set up folders for components, redux, and tests",
            completed: true,
        },
        {
            id: 2,
            title: "Implement task list component",
            description: "Display tasks with title and completion status",
            completed: false,
        },
        {
            id: 3,
            title: "Write unit tests",
            description: "Test reducers and task components using React Testing Library",
            completed: false,
        },
        {
            id: 4,
            title: "Set the new environment",
            description: "Set the new environment for deploy",
            completed: false,
        },
        {
            id: 5,
            title: "Code review task 1",
            description: "Code review session",
            completed: false,
        },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        toggleTask(state, action) {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },
    },
});

export const {
    toggleTask,
    addTask,
    removeTask
} = tasksSlice.actions;
export default tasksSlice.reducer;