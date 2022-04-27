const initialState = {
  screenData: "",
};
export default function sendData(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "message":
      return {
        ...state,
        screenData: action.data,
      };
      break;
    default:
      return state;
  }
}
