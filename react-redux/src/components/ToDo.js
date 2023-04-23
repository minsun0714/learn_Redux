import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreators } from "../store";

const DeleteBtn = styled.button`
  background-color: whitesmoke;
  border: transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 5px gray;
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <DeleteBtn onClick={onBtnClick}>DEL</DeleteBtn>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
