import tasksReducer, { toggleTask, addTask, removeTask } from '../redux/tasksSlice';

describe('tasksSlice reducer', () => {
    const initialState = {
        tasks: [
            { id: 1, title: "Create project structure", description: "Set up folders for components, redux, and tests", completed: true, },
            { id: 2, title: "Implement task list component", description: "Display tasks with title and completion status", completed: false, },
            { id: 3, title: "Write unit tests", description: "Test reducers and task components using React Testing Library", completed: false, },
            { id: 4, title: "Set the new environment", description: "Set the new environment for deploy", completed: false, },
            { id: 5, title: "Code review task 1", description: "Code review session", completed: false, },
        ],
    };

    it('should handle initial state', () => {
        expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should toggle task completed state', () => {
        const actual = tasksReducer(initialState, toggleTask(2));
        expect(actual.tasks.find(t => t.id === 2).completed).toBe(true);
    });

    it('should add a new task', () => {
        const newTask = { id: 6, title: "New Task", description: "Test add", completed: false };
        const actual = tasksReducer(initialState, addTask(newTask));
        expect(actual.tasks).toHaveLength(initialState.tasks.length + 1);
        expect(actual.tasks).toContainEqual(newTask);
    });

    it('should remove a task', () => {
        const actual = tasksReducer(initialState, removeTask(1));
        expect(actual.tasks.find(t => t.id === 1)).toBeUndefined();
    });
});
