//Reducer function that should return the initial state.
//Has to be pure, should take the state and the action as an argument and should return the next state.

const themeReducer = (state, action) => {
  //For primary colors
  switch (action.type) {
    case 'color-1': {
      return {
        //The state needs to be updated without mutation
        ...state,
        primary: 'color-1',
      };
    }
    case 'color-2': {
      return {
        ...state,
        primary: 'color-2',
      };
    }
    case 'color-3': {
      return {
        ...state,
        primary: 'color-3',
      };
    }
    case 'color-4': {
      return {
        ...state,
        primary: 'color-4',
      };
    }
    case 'color-5': {
      return {
        ...state,
        primary: 'color-5',
      };
    }
    case 'color-6': {
      return {
        ...state,
        primary: 'color-6',
      };
    }
    //for background
    case 'bg-1': {
      return {
        ...state,
        background: 'bg-1',
      };
    }
    case 'bg-2': {
      return {
        ...state,
        background: 'bg-2',
      };
    }
    default: {
      throw Error('Unknoun action ' + action.type);
    }
  }
};
export default themeReducer;
