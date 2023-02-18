const initialState = {
    userRole: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_ROLE':
        return {
          ...state,
          userRole: action.payload
        }
      default: return state
    }
  }
  
  export default reducer;