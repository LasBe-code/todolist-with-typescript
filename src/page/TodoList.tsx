import React from "react";
import { useRecoilValue } from "recoil";
import TestTodoItem from "../component/todo/TestTodoItem";
import TodoItem from "../component/todo/TodoItem";
import TodoItemCreator from "../component/todo/TodoItemCreator";
import TodoListFilters from "../component/todo/TodoListFilter";
import TodoListStats from "../component/todo/TodoListStats";
import { TodoListStateArrayType, TodoListStateType } from "../model/TodoModel";
import { todoListState } from "../recoil/atoms";
import { filteredTodoListState } from "../recoil/selector";

function TodoList(): React.ReactElement {
  const todoList: TodoListStateArrayType = useRecoilValue(
    filteredTodoListState
  );

  return (
    <div style={{ margin: "auto" }}>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <div>
          <TodoItem key={todoItem.id} item={todoItem} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
