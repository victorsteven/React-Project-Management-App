const initState = {
  projects: [
    {id: 1, title: 'hello dear', content: 'this is what i am made up of'},
    {id: 2, title: 'hello dear 2', content: 'this is what i am made up of 2'},
    {id: 3, title: 'hello dear 3', content: 'this is what i am made up of 3'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
    console.log('created project', action.project)
    break;
    default:
      console.log('cant create project');
  }
  return state;
}

export default projectReducer; 