import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function List({ id, text , onDelete}) {
  return (
    <div id="l" >
      <input type="checkbox"></input>
    <p id={`item-${id}`}>{text}</p>
    <button id="del" onClick={() => onDelete(id)}>
      <DeleteIcon/>
      </button></div>
  );
}

export default List;
