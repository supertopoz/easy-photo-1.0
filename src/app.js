var config = CONFIG 
var fbInit = false;

const configFirebase = () => {
	return new Promise((resolve, reject) => {
    if(firebase.initializeApp(config)){
    	resolve(true)
    } else {
    	reject(false)
    }
	})
}

configFirebase().then((result) =>{
	fbInit = true;
}).catch((error) => {
  fbInit = false;
});

$(document).ready(()=>{
	addMenu();
	addLogin();
})

const addMenu = () => {
  let fixture = $( "#menu" ); 
  fixture.append(
  	'<div><img src="./assets/title.PNG"/></div>'+
  	'<div><span id="logout-btn" hidden>Logout</span></div>'       
  	);
}

$(document).on('click','#logout-btn', () => {
  	logout();
 });


const logout = () => {
  const user = firebase.auth().currentUser;
  if(user){
		firebase.auth().signOut().then(function() {
		  return true
		}).catch(function(error) {
		  console.log(error.message);
		  return false;
  })
  } else {
  	console.log('no user')
  	return true;
  };
}

const addLogin = () => {
	$('#login').append(
  '<div id="firebaseui-auth-container"></div>'+
  '<div id="loader">Loading...</div>'
	)
	ui.start('#firebaseui-auth-container', uiConfig);
}

const addPictureAddingTool = () => {
	$('#pictures').append(
  '<div>' +
  	'<div id="add-item">'+
	  	'<input placeholder="Title..." id="picture-title" class="picture-title" type="text">'+
	  	'<span class="timestamp">Timestamp</span>'+
	  	'<label id="upload-picture-btn" class="upload-picture custom-file-upload">'+
    		'<input id="uploaded-picture" hidden type="file" onchange="previewFile()">'+   
    			'<span class="btn">ADD PICTURE</span>'+
  			'</label>'+ 
      '<img src="" id="preview-image"></img>'+  
	  	'<textarea placeholder="Describe..." class="picture-tags"></textarea>'+
	  	'<button class="save-picture-btn">Save</button>'+
  	'</div>'+
  '</div>' 
  )	
}

const previewFile = (e) => {
  if(e) return true;
  var preview = document.querySelector('#preview-image'); //selects the query named img
  var file    = document.querySelector('#uploaded-picture').files[0]; //sames as here
  var reader  = new FileReader();
  $('.upload-picture').hide(); 
  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
  reader.readAsDataURL(file); //reads the data as a URL
  console.log(reader)
  } else {
    preview.src = "";
  }
}




