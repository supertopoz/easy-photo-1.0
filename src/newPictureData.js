$(document).on('keyup', '#picture-title', (e) => {
	const letters = e.target.value;
	getTitleValue(letters)
})

const getTitleValue = (letters) => {
  updateUi.dispatch(addKey({value: letters}))
}

const addPictureToRedux = (image) => {
  updateUi.dispatch(addImage({value: image}))	
}   

$(document).on('keyup', '#new-picture-tags', (e) => {
	const letters = e.target.value;
	addTagsToRedux(letters)
})

const addTagsToRedux = (letters) => { 
  updateUi.dispatch(addTags({value: letters}))  	
}  
 
