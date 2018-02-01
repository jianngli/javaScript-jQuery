// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();
var xhr1 = new XMLHttpRequest();
// Create XMLHttpRequest object
var b = document.getElementById('reqAjax');
var b1 = document.getElementById('reqAjax1');
b1.addEventListener('click',function (e) {
        // When response has loaded
        // The following conditional check will not work locally - only on a server
        if(xhr.status === 200) {                       // If server status was ok
            document.getElementById('content').innerHTML = xhr.responseText; // Update
        }
    xhr.open('GET', 'data/data.html', true);        // Prepare the request
    xhr.send(null);                                 // Send the request
},false);


b.addEventListener('click',function (e) {

    if(xhr1.status === 200) {                       // If server status was ok
        document.getElementById('content').innerHTML = xhr1.responseText; // Update
    }
    xhr1.open('GET', 'data/data.xml', true);        // Prepare the request
    xhr1.send(null);
},false);