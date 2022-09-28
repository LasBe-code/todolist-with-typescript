import { atom } from "recoil";
import {
  defaultTodoListState,
  TodoListStateArrayType,
} from "../model/TodoModel";

export const todoListState = atom<TodoListStateArrayType>({
  key: "todoListState",
  default: [defaultTodoListState],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
