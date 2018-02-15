// Reducer - takes the action types and reduces them into a new state condition.
const reducer = (state = {save: false}, action) =>{
     
  switch (action.type) {
    case 'ADD_TITLE':
      let newImage = {}
      newImage.title = action.value
      return Object.assign({}, state, { 
        newImage
      }) 
    case 'ADD_TIMESTAMP':
      return Object.assign({}, state, { 
        newImage.timestamp = action.value
      })       
    default:
      return state
  }
 
}

const updateUi = Redux.createStore(reducer);


updateUi.subscribe(() => {
  window.store = updateUi.getState();

});

const addKey = (e) => ({type:'ADD_TITLE', value: e.value})
const addTimeStamp = (e) => ({type:'ADD_TIMESTAMP', value: e.value})
