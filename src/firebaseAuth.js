// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'http://127.0.0.1:8887',
  signInOptions:[
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/plus.login'
      ],
      customParameters: {
        prompt: 'select_account'
      }
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
 ],
  tosUrl: 'https//:google.com'
};

const loggedInView = () => {
  console.log('user logged in')// User is signed in.
  $('#logout-btn').show()
  $('#login').hide()
  addPictureAddingTool();
}

const loggedOutView = () => {
  $('#logout-btn').hide()
  $('#login').show()
  console.log('No user is signed in.')
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    loggedInView();
  } else {
    loggedOutView();
  }
});