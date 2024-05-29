import React, { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const changed = event.target.value;
    setText(changed);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      setItems((prevItems) => [...prevItems, { text, completed: false }]);
      setText("");
    }
  }

  function strike(id) {
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div id="application">
      <div id="todo"><h1>To-Do!!</h1></div>
      <div>
        <form onSubmit={addItem}>
          <input onChange={handleChange} type="text" value={text} />
          <button type="submit">+</button>
        </form>
      </div>
      <div id="content">
        <ul>
          {items.map((el, index) => (
            <List key={index} id={index} text={el.text} completed={el.completed} strike={strike} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
