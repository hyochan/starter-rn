const initialState = {
  someAction: false,
};

function someAction(state = initialState.someAction, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_STATE':
      console.log('action LOGGED_IN : ' + JSON.stringify(action));
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}

const myReducers = {
  someAction,
};

export default myReducers;
