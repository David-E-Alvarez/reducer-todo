export const initialState = [
    {
      task: 'networking assignment',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'yoga class',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'gym',
      id: 1528817084359,
      completed: false
    }
  ];

  export const todoReducer = (state = initialState, action) => {
      console.log("action: ", action)
      switch(action.type){
        case 'ADD_TASK':
          return[
            ...state,{
              task: action.payload,
              id: new Date(),
              completed: false
            }            
          ]
        case 'TOGGLE':
          return state.map(taskObj => {
            if(taskObj.id === action.payload){
              return {...taskObj, completed: !taskObj.completed}
            }else{
              return taskObj;
            }
          })
          case 'CLEAR_TASK':
            return state.filter(taskObj => {
              return !taskObj.completed;
            })
        default: 
          return state;
      }
  }