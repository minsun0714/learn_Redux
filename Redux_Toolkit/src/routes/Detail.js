import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  const targetToDo = toDos.find((toDo) => toDo.id === +id);

  return (
    <>
      <div>{targetToDo?.text}</div>
      <div>id: {targetToDo?.id}</div>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
export default connect(mapStateToProps)(Detail);
