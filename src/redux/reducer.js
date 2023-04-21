import { ADD_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [
    { id: 1, description: 'Task 1', isDone: false },
    { id: 2, description: 'Task 2', isDone: true },
    { id: 3, description: 'Task 3', isDone: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      };
      return { tasks: [...state.tasks, newTask] };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { id: action.payload.id, description: action.payload.description, isDone: action.payload.isDone }
          : task
      );
      return { tasks: updatedTasks };
    default:
      return state;
  }
};

export default reducer;
