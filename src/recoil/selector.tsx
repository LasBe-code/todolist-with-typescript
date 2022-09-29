import { selector } from "recoil";
import { TodoListStateArrayType } from "../model/TodoModel";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);
    const list: TodoListStateArrayType = get(todoListState);
    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList: TodoListStateArrayType = get(todoListState);
    const totalNum: number = todoList.length;
    const totalCompletedNum: number = todoList.filter(
      (item) => item.isComplete
    ).length;
    const totalUncompletedNum: number = totalNum - totalCompletedNum;
    const percentCompleted: number =
      totalNum === 0 ? 0 : totalCompletedNum / totalNum;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
