#Swipe
'Swipe' allows you to easily attach swipe events to a div id. Change the options to adjust the threshold and apply functions to directional swipes.

#####Create options for your Swipe Class
```javascript
var options = {
	id:'swipeMe1',
	threshold:20,
	swipeUpFunction: null,
	swipeDownFunction: null,
	swipeLeftFunction: onSwipeLeft,
	swipeRightFunction: onSwipeRight,
	noSwipeFunction:onSwipeTap
};
```

#####Create a new Swipe instance while passing your options
```javascript
var mySwipe = new Swipe(options);
```

#####Initialize instance:
```javascript
mySwipe.init();
```

#####Change entire options object:
```javascript
mySwipe.options = newOptions;
```

#####Change an individual option:
```javascript
mySwipe.options.threshold = 40;
```

#####Remove reference:
```javascript
mySwipe.remove();
```
