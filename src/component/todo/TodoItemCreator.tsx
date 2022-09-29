import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
  const readTodoList = useRecoilValue(todoListState);

  const addItem = useCallback(() => {
    const newItem: TodoListStateType = {
      id: UidHelper.getUid(),
      text: inputValue,
      isComplete: false,
    };
    setTodoList((oldTodoList) => [...oldTodoList, newItem]);
    setInputValue("");
  }, [inputValue]);

  const onChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(value);
      // console.log("onChangeStatus: ", readTodoList);
    },
    [inputValue]
  );

  // const onChange = ({target : {value}}: React.ChangeEvent<HTMLInputElement>): void => {
  //   setInputValue(value);
  //   // console.log("onChangeStatus: ", readTodoList);
  // };

  const memoOnChange = useMemo(() => onChange, [inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={memoOnChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
