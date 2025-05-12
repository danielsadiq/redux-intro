import {createStore} from "redux";
interface StateType {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initState: StateType = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};


function reducer(state = initState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
const store = createStore(reducer)

store.dispatch({type: "account/deposit", payload: 500});
store.dispatch({type: "account/withdraw", payload: 200});
console.log(store.getState());

// store.dispatch({type:"account/requestLoan", payload: {amount:1000, purpose: "Buy a car"}})
