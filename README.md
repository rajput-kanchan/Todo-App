To-Do App

- Add Items
- Update Items
- Delete Items
- Search Items

Actions that can be performed:

- Completed
- Not Completed
- Mark All Completed
- Toggle Buttons

Overview -

- The To-Do App is a web application designed to help users manage their tasks efficiently. Built using modern web technologies, this application features a simple user interface to add, delete, search, and organize tasks. The application employs React for the frontend and Redux for state management.

System Design -

- Frontend: The frontend is developed using React. It includes components for managing tasks, such as Todo, TodoList, and Buttons. The app uses Redux for state management to handle tasks and filters.

State Management:

- Redux is used to manage the state of tasks, including adding, updating, deleting, and filtering tasks. The state also includes a filter for viewing tasks and search text for filtering tasks.

Implementation
Frontend
React Components:

Todo: The main component for adding tasks, searching, and displaying the task list.
TodoList: Displays the list of tasks and handles task-related actions.
Buttons: Provides various actions like marking all tasks as completed or toggling the view.

State Management:
Reducers: Manages state updates for tasks, filters, and search text. The reducer handles actions like ADD_TODO, DELETE_TODO, TOGGLE, MARK_COMPLETED, MARK_NOT_COMPLETED, MARK_ALL_COMPLETED, FILTER_TODO, and UPDATE_TODO.

Actions -

- Users can perform the following actions in the app:

Completed: Mark a single task as completed.
Not Completed: Mark a single task as not completed.
Mark All Completed: Mark all tasks in the current view as completed.
Toggle Buttons: Switch between different views or states (e.g., completed vs. not completed tasks).

Setup and Running the Application -

Clone the repository:

- git clone https://github.com/rajput-kanchan/Todo-App.git

- cd todo-app/frontend
- npm install
- npm start
