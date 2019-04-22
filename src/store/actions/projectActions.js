export const createProject = (project) => {
  //when we use 'thunk', we return a function instead of an object
  //dispatch: dispatches an action the reducer
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make asnc call to the database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project, 
      authorFirstName: 'Victor',
      authorLastName: 'Steven',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err });
    })
  }
}