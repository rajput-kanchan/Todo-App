import {
  ADD_TODO,
  TOGGLE,
  DELETE_TODO,
  MARK_COMPLETED,
  MARK_NOT_COMPLETED,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  UPDATE_TODO,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const markCompletedTodo = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markNotCompletedTodo = (id) => ({
  type: MARK_NOT_COMPLETED,
  payload: { id },
});

export const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: { filter },
});

export const markAllCompletedTodo = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateTodo = (searchText) => ({
  type: UPDATE_TODO,
  payload: { searchText },
});
