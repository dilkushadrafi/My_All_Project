var skill = document.querySelector("#skill");
var paras = document.querySelectorAll("#ab");
var display = false; 

skill.addEventListener('click', function() {
    if (display==true) {
       
        paras.forEach(function(paras) {
            paras.style.display = "none";
        });
        display = false;
    } else {
        
        paras.forEach(function(paras) {
            paras.style.display = "block";
        });
        display = true;
    }
});


var experiences = document.querySelector("#experience");
var boxes = document.querySelectorAll("#id-exp");
var display = false; 
experiences.addEventListener('click', function() {
    if (display==true) {
        
        boxes.forEach(function(boxes) {
            boxes.style.display = "none";
        });
        display = false;
    } else {
       
        boxes.forEach(function(boxes) {
            boxes.style.display = "block";
        });
        display = true;
    }
});

var education = document.querySelector("#education");
var eduItems = document.querySelectorAll("#id-edu"); 
var display = false;

education.addEventListener('click', function() {
    if (display) {
        
        eduItems.forEach(function(edu) {
            edu.style.display = "none";
        });
        display = false;
    } else {
        
        eduItems.forEach(function(edu) {
            edu.style.display = "block";
        });
        display = true;
    }
});







