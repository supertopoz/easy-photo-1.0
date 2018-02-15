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






