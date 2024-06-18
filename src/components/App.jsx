import React, { useState } from "react";
import List from "./List"; // Ensure the path to your List component is correct
import "./App.css";
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    if (text !== "") {
      setItems((prevItems) => [...prevItems, { text: text }]);
      setText("");
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div id="application">
      <div id="todo">
        <h1>To-Do!!</h1>
      </div>
      <div>
        <form onSubmit={addItem}>
          <input onChange={handleChange} type="text" value={text} />
          <button type="submit"><AddIcon/></button>
        </form>
      </div>
      <div id="content">
        {items.map((el, index) => (
          <List key={index} id={index} text={el.text} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
