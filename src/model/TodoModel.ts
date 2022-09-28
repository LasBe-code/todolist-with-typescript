export const defaultTodoListState = {
  id: 0,
  text: "first",
  isComplete: false,
};

export type TodoListStateType = typeof defaultTodoListState;

export type TodoListStateArrayType = typeof defaultTodoListState[];
