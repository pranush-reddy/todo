import React, { useState } from "react";
<<<<<<< HEAD
import List from "./List"; // Ensure the path to your List component is correct
=======
import List from "./List";
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
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
<<<<<<< HEAD
    if (text !== "") {
      setItems((prevItems) => [...prevItems, { text: text }]);
=======
    if (text) {
      setItems((prevItems) => [...prevItems, { text, completed: false }]);
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
      setText("");
    }
  }

<<<<<<< HEAD
  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
=======
  function strike(id) {
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
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
<<<<<<< HEAD
        {items.map((el, index) => (
          <List key={index} id={index} text={el.text} onDelete={deleteItem} />
        ))}
=======
        <ul>
          {items.map((el, index) => (
            <List key={index} id={index} text={el.text} completed={el.completed} strike={strike} />
          ))}
        </ul>
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
      </div>
    </div>
  );
}

export default App;
