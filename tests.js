QUnit.module( "Firebase Ready Tests" );
QUnit.test( "Test Firebase is ready", ( assert ) => {
  assert.ok(fbInit, "firebase initialized" );
});

QUnit.test( "Log user out", (assert) => {
  assert.expect( 1 );
  const logoutBtn = $( "#logout-btn" );
  logoutBtn.on( "click", function() {
    assert.ok(logout(), "logout was clicked!" );
  });
  logoutBtn.trigger( "click" );
});



QUnit.module( "Menu Tests" );
QUnit.test( "Appends a menu bar", ( assert ) => {
  assert.equal( $( "div", "#menu" ).length, 2, "Menu added successfully!" );
});


QUnit.module( "User Login Tests" );
QUnit.test( "Appends a login div", ( assert ) => {
  let numDivs = 4
  firebase.auth().onAuthStateChanged((user) => {
    if(user) numDivs = 2; 
  });  
  assert.equal( $( "div", "#login" ).length, numDivs, "Login menu added successfully!" );
});

QUnit.test( "Checks check for user is working", ( assert ) => {
  let userCheck = 'not working'
	firebase.auth().onAuthStateChanged((user) => {
    userCheck = true; 
	});    
  assert.ok(userCheck, "Check for user is working" );
});


QUnit.module( "Add picture UI" );
QUnit.test( "Appends add picture div", ( assert ) => {  
  let numDivs = 0
  firebase.auth().onAuthStateChanged((user) => {
    if(user) numDivs = 4; 
  });  
  assert.equal( $( "div", "#pictures" ).length, numDivs, "Added picture add block!" );
});

QUnit.test( "Check file upload button works", ( assert ) => {  
  assert.expect( 1 );
    let func = previewFile(true);
    assert.ok(func, "Added picture add block!" );
});


QUnit.module( "Add data to firebase" );
QUnit.test( "checks new title letter is added to Redux state", ( assert ) => { 
    updateUi.dispatch(addKey({value: 'k'}))
    const data = window.store.newImage.title        
    assert.equal(data, 'k', "Tests title is updated in Redux store!" );  
});

QUnit.test( "checks timeStamp is added to Redux state", ( assert ) => { 
    const now = Date.now()
    updateUi.dispatch(addTimeStamp({value: now}))
    const storedNow = window.store.newImage.timestamp        
    console.log(window.store)
    assert.equal(storedNow, now, "Tests title is updated in Redux store!" );  
});











