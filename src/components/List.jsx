import React from "react";
<<<<<<< HEAD
import DeleteIcon from '@mui/icons-material/Delete';
function List({ id, text , onDelete}) {
  return (
    <div id="l" >
      <input type="checkbox"></input>
    <p id={`item-${id}`}>{text}</p>
    <button id="del" onClick={() => onDelete(id)}>
      <DeleteIcon/>
      </button></div>
=======

function List({ id, text, completed, strike }) {
  return (
    <div id="l">
    <li
      id={`item-${id}`}
      style={{ 
        textDecoration: completed ? "line-through" : "none" }}
      onClick={() => strike(id)}
    >
      {text}
    </li></div>
>>>>>>> 4c986bc07b96da5b56735f7b439b9d7060fa08b3
  );
}

export default List;
