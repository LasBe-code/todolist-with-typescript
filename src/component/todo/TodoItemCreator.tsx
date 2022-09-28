import React, { ChangeEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UidHelper } from "../../helpers/UidHelper";
import {
  TodoListStateArrayType,
  TodoListStateType,
} from "../../model/TodoModel";
import { todoListState } from "../../recoil/atoms";

function TodoItemCreator() {
  // :: useState('')로 인해 암묵적으로 string 할당
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const readTodoList = useRecoilState(todoListState);

  const addItem = () => {
    const newItem: TodoListStateType = {
      id: UidHelper.getUid(),
      text: inputValue,
      isComplete: false,
    };
    setTodoList((oldTodoList) => [...oldTodoList, newItem]);
    console.log(readTodoList[0]);
    setInputValue("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
