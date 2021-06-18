import "./App.css";
import React from "react";

function App() {
  const list = [
    {
      id: 1,
      text: "Define character relationships",
      done: false,
      place: "home",
    },
    { id: 2, text: "Define character goals", done: false, place: "home" },
    { id: 3, text: "Map plot", done: false, place: "home" },
  ];

  const [todoList, setTodoList] = React.useState(list);

  type Todo = Readonly<{
    id: number;
    text: string;
    done: boolean;
    place?: Place;
  }>;

  type CompletedTodo = Todo & { readonly done: true };

  type Index = number;

  type Place = "home" | "work" | { custom: string };

  function handleCheckbox(todo: Todo) {
    const toggledTodo = toggleTodo(todo);
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === toggledTodo.id) {
        return toggledTodo;
      } else {
        return todoItem;
      }
    });
    setTodoList(newTodoList);
  }

  function handleMarkAllComplete() {
    const placeholderTodoList = [...todoList];
    setTodoList(completeAll(placeholderTodoList));
  }

  function toggleTodo(todo: Todo): Todo {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done,
      place: todo.place,
    };
  }

  function completeAll(todos: readonly Todo[]): CompletedTodo[] {
    return todos.map((todo) => ({
      ...todo,
      done: true,
    }));
  }

  function placeToString(place: Place): string {
    if (place === "home") {
      return "Home 🏠";
    } else if (place === "work") {
      return "Work 📂";
    } else {
      return "📍" + place.custom;
    }
  }

  return (
    <div className="App">
      <h1>What would you like to get done today?</h1>
      {todoList.map((todo, index) => {
        return (
          <React.Fragment>
            <ul>
              <li>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleCheckbox(todo)}
                />
                {todo.text}
              </li>
            </ul>
          </React.Fragment>
        );
      })}
      <button onClick={() => handleMarkAllComplete()}>
        Mark All Completed
      </button>
    </div>
  );
}

export default App;
