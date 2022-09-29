import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import {
  TodoListStateArrayType,
  TodoListStateType,
} from "../../model/TodoModel";
import { todoListState } from "../../recoil/atoms";

function replaceItemAtIndex(
  arr: TodoListStateArrayType,
  index: number,
  newValue: TodoListStateType
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoListStateArrayType, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

interface TodoListStatePropType {
  item: TodoListStateType;
}

const TodoItem = ({ item }: TodoListStatePropType) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(
    (listItem: TodoListStateType): boolean => listItem === item
  );
  console.log("TodoItem: ", item);

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
export default TodoItem;
