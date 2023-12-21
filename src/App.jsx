import { useState } from "react";
import Button from "./components/Button";
import Item from "./components/Item";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function onInputChange(event) {
    // text = event.target.value; // ❌
    setText(event.target.value);
  }

  function addToDo() {
    if (text.trim().length > 0) {
      setTodos([]);
      setTodos([text, ...todos]);
      setText("");
    }
  }

  function onKeyUp(event) {
    if (event.key === "Enter") {
      addToDo();
    }
  }

  function borrar(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  return (
    <main className="bg-black min-h-screen flex justify-center p-16 text-white">
      <div className="h-ful flex flex-col w-full max-w-[500px] gap-5">
        <input
          type="text"
          className="bg-white/20 p-2 rounded"
          value={text}
          onChange={onInputChange}
          onKeyUp={onKeyUp}
        />

        <Button className="bg-white rounded p-2 text-black" onClick={addToDo}>
          Agregar
        </Button>

        {todos.map((todo, index) => {
          return (
            <Item
              key={`item-${index}`}
              text={todo}
              alBorrar={() => borrar(index)}
            />
          );
        })}
      </div>
    </main>
  );
}
