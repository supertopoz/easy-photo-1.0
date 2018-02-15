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
  assert.equal( $( "div", "#login" ).length, 4, "Login menu added successfully!" );
});

QUnit.test( "Checks check for user is working", ( assert ) => {
  let userCheck = 'not working'
	firebase.auth().onAuthStateChanged((user) => {
    userCheck = true; 
	});    
  assert.ok(userCheck, "Check for user is working" );
});


QUnit.module( "Add picture button" );











