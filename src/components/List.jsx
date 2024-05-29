import React from "react";

function List(props) {
  return (
    <div id="l" onClick={() => props.strike(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}

export default List;
