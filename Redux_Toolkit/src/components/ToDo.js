import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import { actionCreators } from "../store";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

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

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <DeleteBtn onClick={onBtnClick}>DEL</DeleteBtn>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
