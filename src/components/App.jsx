import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css";
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const savedItems = localStorage.getItem("todos");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("todos", JSON.stringify(items));
    }
  }, [items]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    if (text !== ""){
      const newItem = { text: text };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setText("");
    }
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item, index) => index !== id);
    setItems(updatedItems);
  }
  const [daysDifference, setDaysDifference] = useState(null);

  useEffect(() => {
    const storedDateString = localStorage.getItem('storedDate');
    const currentDate = new Date();
    
    if (storedDateString) {
      const storedDate = new Date(storedDateString);
      if (storedDate.getTime() !== currentDate.getTime()) {
        const timeDifference = currentDate - storedDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
        setDaysDifference(Math.max(daysDifference,1));
        localStorage.setItem('storedDate', currentDate.toISOString());
      } else {
        setDaysDifference(1);
      }
    } else {
      localStorage.setItem('storedDate', currentDate.toISOString());
      setDaysDifference(1);
    }
  }, []);


  return (
    <>
    <header><h2 id="streak"> {daysDifference} 🔥</h2></header>
    <div id="application">
      <div id="todo">
        <h1>To-Do!!</h1>
      </div>
      <div>
        <form onSubmit={addItem}>
          <input onChange={handleChange} type="text" value={text} />
          <button type="submit">
            <AddIcon />
          </button>
        </form>
      </div>
      <div id="content">
        {items.map((el, index) => (
          <List key={index} id={index} text={el.text} onDelete={deleteItem} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
