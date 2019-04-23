const initState = {}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
    console.log('login error');
      return {
        ...state,
        authError: 'login failed'
      }
    case 'LOGIN_SUCCESS':
    console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      return state
    
      case 'SIGNUP_SUCESS': 
        console.log('Sign uo success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state, 
        authError: action.err.message
      }
      default:
      return state;
    }
}

export default authReducer; 