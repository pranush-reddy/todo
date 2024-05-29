import React from "react";

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
  );
}

export default List;
