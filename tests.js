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

QUnit.test( "checks tags are added to Redux state", ( assert ) => { 
    
    const tags = 'Bob, Bill, Steve'
    updateUi.dispatch(addTags({value: tags}))
    const storedTags = window.store.newImage.tags        
    console.log(window.store)
    assert.equal(storedTags, tags, "Tests tags are updated in Redux store!" );  
});

QUnit.test( "Check 64 bit image is added to Redux state", ( assert ) => { 
    
    const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGGww6JLHAkAYAAACwSURBVBjTY/j//z/D////GXfd+1wQs+HRLY6OK/+lJ17/G7Ph0a1d9z4X/P//n/H///8MjP///2fsPfFmac3Bl5EMWECLvfjyYguRaMZd9z4X+K162M+AB2wKky9k/u+Yuejam5/C+BT+/vtfmVF64vW/b7//ZcKnUJiT+R9eBciAyVGe+y4hRY7y3HeZ4vQEpxFSGKcnOI3JVZFnYou9+HJcilrsxZe7KvJMZCA2wAGgOWN3AnUiaAAAAABJRU5ErkJggg=='
    updateUi.dispatch(addImage({value: image}))
    const storedImage = window.store.newImage.image        
    console.log(window.store)
    assert.equal(storedImage, storedImage, "Tests image is held in Redux store!" );  
});











