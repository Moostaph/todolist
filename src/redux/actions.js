export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

export const editTask = (id, description, isDone) => ({
  type: EDIT_TASK,
  payload: { id, description, isDone },
});
