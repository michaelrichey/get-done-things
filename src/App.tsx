import "./App.css";
import React from "react";

function App() {
  const list = [
    { id: 1, text: "Define character relationships", done: false },
    { id: 2, text: "Define character goals", done: false },
    { id: 3, text: "Map plot", done: false },
  ];

  const [todoList, setTodoList] = React.useState(list);

  type Todo = {
    readonly id: number;
    readonly text: string;
    readonly done: boolean;
  };

  type Index = number;

  function handleCheckbox(index: Index) {
    const placeholderTodoList = [...todoList];
    placeholderTodoList[index] = toggleTodo(placeholderTodoList[index]);

    setTodoList(placeholderTodoList);
  }

  function toggleTodo(todo: Todo): Todo {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done,
    };
  }

  return (
    <div className="App">
      <h1>What would you like to get done today?</h1>
      {todoList.map((todo, index) => {
        return (
          <React.Fragment>
            <ul>
              <li>
                <input type="checkbox" onClick={() => handleCheckbox(index)} />
                {todo.text}
              </li>
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
