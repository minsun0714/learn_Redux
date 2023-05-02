// // import { legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit");

export const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export default configureStore({ reducer: toDos.reducer });
console.log(toDos.reducer);
export const { addToDo, deleteToDo } = toDos.actions;
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // const ADD = "ADD";
// // const DELETE = "DELETE";

// // const addToDo = (text) => {
// //   return {
// //     type: ADD,
// //     text,
// //   };
// // };

// // const deleteToDo = (id) => {
// //   return {
// //     type: DELETE,
// //     id: parseInt(id),
// //   };
// // };

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action) => {
//       return state.filter((toDo) => toDo.id !== action.payload);
//     });
// });

// // const reducer = (state = [], action) => {
// //   switch (action.type) {
// //     case addToDo.type:
// //       // case ADD:
// //       return [{ text: action.payload, id: Date.now() }, ...state];
// //     case deleteToDo.type:
// //       // case DELETE:
// //       return state.filter((toDo) => toDo.id !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };
