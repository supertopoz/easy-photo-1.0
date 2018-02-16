// Reducer - takes the action types and reduces them into a new state condition.
const reducer = (state = {save: false, newImage:{}}, action) =>{
     
  switch (action.type) {
    case 'ADD_TITLE':
      return Object.assign({}, state, { 
        newImage: upDateCurrentPicture(state.newImage, {title: action.value}) 
      }) 
    case 'ADD_TIMESTAMP':
      return Object.assign({}, state, { 
        newImage: upDateCurrentPicture(state.newImage, {timestamp: action.value})
      })  
    case 'ADD_TAGS':
      return Object.assign({}, state, { 
        newImage: upDateCurrentPicture(state.newImage, {tags: action.value})
      }) 
    case 'ADD_IMAGE':
      return Object.assign({}, state, { 
        newImage: upDateCurrentPicture(state.newImage, {image: action.value})
      })           
    default:
      return state
  }
 
}

const upDateCurrentPicture = (state, obj) => {

  const key = Object.keys(obj)[0]
  state[key] = obj[key]
  return state
}



const updateUi = Redux.createStore(reducer);


updateUi.subscribe(() => {
  window.store = updateUi.getState();
  console.log(updateUi.getState())
});

const addKey = (e) => ({type:'ADD_TITLE', value: e.value})
const addTimeStamp = (e) => ({type:'ADD_TIMESTAMP', value: e.value})
const addTags = (e) => ({type:'ADD_TAGS', value: e.value})
const addImage = (e) => ({type:'ADD_IMAGE', value: e.value})
