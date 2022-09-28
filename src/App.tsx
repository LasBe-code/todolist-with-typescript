import { RecoilRoot } from "recoil";
import TodoList from "./page/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
