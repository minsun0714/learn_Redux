import React from "react";
import styled from "styled-components";

const DeleteBtn = styled.button`
  background-color: whitesmoke;
  border: transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 5px gray;
`;

function ToDo({ text }) {
  return (
    <li>
      {text} <DeleteBtn>DEL</DeleteBtn>
    </li>
  );
}
export default ToDo;
