//action Types
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";

// actions
export function addTask(newtask) {
    return {
        type : ADD_TASK,
        payload: newtask,
    };
}




export function editTask(task) {
    return {
        type : EDIT_TASK,
        payload : task,
    }
}

