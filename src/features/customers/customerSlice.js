import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.createdAt,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// };

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// };

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID, createdAt) {
        return {
          payload: {fullName, nationalID, createdAt},
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;
