export const createProject = (project) => {
  //when we use 'thunk', we return a function instead of an object
  //dispatch: dispatches an action the reducer
  return (dispatch, getState) => {
    //make asnc call to the database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
}