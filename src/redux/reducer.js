import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_NOT_COMPLETED,
  TOGGLE,
  UPDATE_TODO,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  searchText: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchText: state.searchText,
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchText: state.searchText,
      };

    case TOGGLE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchText: state.searchText,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchText: state.searchText,
      };

    case MARK_NOT_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchText: state.searchText,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchText: state.searchText,
      };

    case FILTER_TODO:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchText: state.searchText,
      };

    case UPDATE_TODO:
      return {
        todos: state.todos,
        filter: state.filter,
        searchText: action.payload.searchText,
      };

    default:
      return state;
  }
};

export default todoReducer;
