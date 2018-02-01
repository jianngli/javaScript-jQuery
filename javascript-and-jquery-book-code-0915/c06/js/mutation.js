var elList, addLink, newEl , counter, listItems; // Declare variables
var newIn = [];
elList  = document.getElementById('workTimePool');               // Get list
addLink = document.querySelector('a');// Get add item button
counter = document.getElementById('counter');            // Get item counter
var button = document.getElementsByTagName('button')[0];

function addItem(e) {                                    // Declare function
  e.preventDefault();                                    // Prevent link action
 newEl = document.createElement('li');                  // New <li> element
 newText = document.createTextNode('New list item');    // New text node
 newEl.appendChild(newText);                            // Add text to <li>
 elList.appendChild(newEl);                             // Add <li> to list
 //    newEl = document.createElement('li');
 //    for(var i = 0 ; i < 5 ; i++ ){
 //    newIn[i] = document.createElement('input');
 //    newIn[i].setAttribute('type','text');
 //    newIn[i].setAttribute('class','Inp');
 //    }
 //
 //    for (var i = 0; i < 5 ; i++){
 //
 //    newEl.appendChild(newIn[i]);
 //
 //    }
 //   elList.appendChild(newEl);

}



function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target;a1;a2;
    target = getTarget(e);

        a1 = target.parentNode;
        a2 = elparntTarget.parentNode;
        a2.removeChild(a1);

    if (e.preventDefault) {                        // If preventDefault() works
        e.preventDefault();                          // Use preventDefault()
    } else {                                       // Otherwise
        e.returnValue = false;                       // Use old IE version
    }
}

function updateCount() {                                 // Declare function
  listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.innerHTML = listItems;                         // Update counter
}

var el = document.getElementById('workTimePool');
if(el.addEventListener){
    el.addEventListener('click',function () {
        itemDone(e);
    },false);
}else{
    el.attachEvent('onclick',function () {
        itemDone(e);
    },false);
}
button.addEventListener('click',function () {
    itemDone(e);
},false);
addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
elList.addEventListener('DOMNodeRemoved',updateCount,false);