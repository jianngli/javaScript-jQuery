// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// Get the element that has an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;

var j = 'weooo';
function say (){
    console.log("hessse");
}
say();
console.log("dasdasda");

var vai = function () {
    var xx = 44;
    return 3;
}();
xx = 33;
console.log(vai);
console.log(xx);

var obj = new Object();
obj.name = 'jiangli';
obj.age = '24';
obj.func = function () {
    return this.name+this.age+'ooooo!';
};

console.log(obj);
console.log(obj.func());

var width = 300;
var shape = {width:3400,height:22};
shape.name = 'use';
var yu = function(){
    console.log('这是宽度'+this.width);
};
shape.yu = yu;
shape.yu();
console.log(shape);
width = window.screen.width;
var height = window.screen.height;
console.log(width+'.'+height);
console.log(window.innerHeight+':'+window.innerWidth);
window.screenX;
window.screenY;
window.location;
window.document;
open('http://baidu.com');