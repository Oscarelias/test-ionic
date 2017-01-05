var mySwipe1;
var mySwipe2;

var options1 = {
	id:'swipeMe1',
	threshold:20,
	swipeUpFunction: null,
	swipeDownFunction: null,
	swipeLeftFunction: onSwipeLeft,
	swipeRightFunction: onSwipeRight,
	noSwipeFunction:onSwipeTap
};

var options2 = {
	id:'swipeMe2',
	threshold:20,
	swipeUpFunction: onSwipeUp,
	swipeDownFunction: onSwipeDown,
	swipeLeftFunction: null,
	swipeRightFunction: null,
	noSwipeFunction:onSwipeTap
};

function init(){
    mySwipe1 = new Swipe(options1);
	mySwipe1.init();

    mySwipe2 = new Swipe(options2);
	mySwipe2.init();
}

function onSwipeLeft(options){
	console.log(options)
	console.log('Swiped left.');
}

function onSwipeRight(){
	console.log('Swiped right.');
}

function onSwipeUp(){
	console.log('Swiped up.');
}

function onSwipeDown(){
	console.log('Swiped down.');
}

function onSwipeTap(){
	console.log('Swipe hotspot tapped.');
}
