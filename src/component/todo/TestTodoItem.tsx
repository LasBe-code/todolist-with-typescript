import React from "react";
import { TodoListStateType } from "../../model/TodoModel";

interface TodoListStatePropType {
  item: TodoListStateType;
}

// function TestTodoItem(prop: any): React.ReactElement {
//   const { text }: TodoListStateType = prop.item.text;
//   console.log("props1", item);
//   return <div></div>;
// }

function TestTodoItem({ item }: TodoListStatePropType): React.ReactElement {
  console.log("props2", item);
  return <div></div>;
}

export default TestTodoItem;
