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

  export const todoReducer = (state, action) => {
      console.log("action: ", action)
      return state;
  }