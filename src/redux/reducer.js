import { ADD_TASK, EDIT_TASK } from "./action";

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Task 1',
    },
    {
      id: 2,
      name: 'Task 2',
    },
    {
      id: 3,
      name: 'Task 3',
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case EDIT_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};
