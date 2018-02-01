// Create a variable called msg to hold a message that will be shown on the page
// Find the width of the browser window, and put this in the msg variable
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
// Find the height of the window and add it to the msg variable
msg += '<p>height: ' + window.innerHeight + '</p>';
// Find the number of items in the browser window's history and add it to the msg variable
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
// Find the width of the computer screen and add it to the msg variable
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
// Find the height of the computer screen and add it to the msg variable
msg += '<p>height: ' + window.screen.height + '</p>';

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the message into that element
el.innerHTML = msg;
// Find the location of the current page and display it in an alert box
// alert('Current page: ' + window.location);
console.log(innerHeight);
console.log(innerWidth);
console.log(document.domain);
console.log(document.URL);
var s = 'ssss'.toUpperCase();
s =s.toLowerCase();
var name =  '讲理';
console.log(name.length);

var saying = 'Home sweet home';
console.log(saying.toUpperCase());
console.log(saying.toLowerCase());
console.log(saying.charAt(12));
console.log(saying.indexOf('e'));
console.log(saying.lastIndexOf('t'));
console.log(saying.substring(1,3));
console.log(saying.split(' '));
console.log(saying.trim());
console.log(saying.replace('h','W'));
console.log(Math.PI);
console.log(Math.PI.toExponential(2));
console.log(Math.PI.toPrecision(3));
console.log(Math.PI.toFixed(3));
var date = new Date();
console.log(date);
console.log(date.getFullYear());
var getDate = date.getDate();
var getDay = date.getDay();
console.log('本月'+getDate+'日:星期：'+getDay);
var getTimezoneOffset = date.getTimezoneOffset();
console.log(getTimezoneOffset);
var toString = date.toString();
console.log(toString);
console.log(date.getHours());
var a = '';
var b = {};
var c = [];
var d = a || b || c;
console.log(d);
var h2 = document.querySelector('h2');
console.log(h2);
console.log(h2.nodeValue);
h2 = document.getElementsByTagName('body');
console.log(h2);