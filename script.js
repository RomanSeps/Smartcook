// Definuj proměnnou, pro změnu viditelnosti
var labelsVisible = false;
var button = document.getElementById("btn")
var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")


var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")

// Funkce pro viditelnost
function demo() {
    var labels = document.querySelectorAll('.label'); // Sežeň všechny "label"
    
    if (!labelsVisible) {
        button.innerText = "- Dish category"
        button1.style.display = 'none'
        button2.style.display = 'none'
        button3.style.display = 'none'
        button4.style.display = 'none'
        card1.style.marginTop = '-5%'
        card2.style.marginTop = '-5%'
        card3.style.marginTop = '-5%'

        labels.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
            
        });
        labelsVisible = true; // Změna proměnné
    } else {
        button.innerText = "+ Dish category"
        button1.style.display = 'block'
        button2.style.display = 'block'
        button3.style.display = 'block'
        button4.style.display = 'block'
        card1.style.marginTop = '-40%'
        card2.style.marginTop = '-40%'
        card3.style.marginTop = '-40%'
        labels.forEach(function(label) {
            label.style.display = 'none'; // Schovej všechny labely
        });
        labelsVisible = false; // Změna proměnné
    }
}

function demo1() {
    var labels = document.querySelectorAll('.label1'); // Sežeň všechny "label"

    if (!labelsVisible) {
    button1.innerText = "- Recipe category"
    button.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    card1.style.marginTop = '-5%'
    card2.style.marginTop = '-5%'
    card3.style.marginTop = '-5%'
        labels.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true; // Změna proměnné
    } else {
    button1.innerText = "+ Recipe category"
    button.style.display = 'block'
    button2.style.display = 'block'
    button3.style.display = 'block'
    button4.style.display = 'block'
    card1.style.marginTop = '-40%'
    card2.style.marginTop = '-40%'
    card3.style.marginTop = '-40%'
        labels.forEach(function(label) {
            label.style.display = 'none'; // Schovej všechny labely
        });
        labelsVisible = false; // Změna proměnné
    }
}

function demo2() {
    var labels = document.querySelectorAll('.label2'); // Sežeň všechny "label"
    
    if (!labelsVisible) {
    button2.innerText = "- Difficulty"
    button.style.display = 'none'
    button1.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    card1.style.marginTop = '-5%'
    card2.style.marginTop = '-5%'
    card3.style.marginTop = '-5%'
        labels.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
            
        });
        labelsVisible = true; // Změna proměnné
    } else {
    button2.innerText = "+ Difficulty"
    button.style.display = 'block'
    button1.style.display = 'block'
    button3.style.display = 'block'
    button4.style.display = 'block'
    card1.style.marginTop = '-40%'
    card2.style.marginTop = '-40%'
    card3.style.marginTop = '-40%'
        labels.forEach(function(label) {
            label.style.display = 'none'; // Schovej všechny labely
        });
        labelsVisible = false; // Změna proměnné
    }
}

function demo3() {
    var labels = document.querySelectorAll('.label3'); // Sežeň všechny "label"
    
    if (!labelsVisible) {
    button3.innerText = "- Price"
    button.style.display = 'none'
    button1.style.display = 'none'
    button2.style.display = 'none'
    button4.style.display = 'none'
    card1.style.marginTop = '-5%'
    card2.style.marginTop = '-5%'
    card3.style.marginTop = '-5%'
        labels.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
            
        });
        labelsVisible = true; // Změna proměnné
    } else {
    button3.innerText = "+ Price"
    button.style.display = 'block'
    button1.style.display = 'block'
    button2.style.display = 'block'
    button4.style.display = 'block'
    card1.style.marginTop = '-40%'
    card2.style.marginTop = '-40%'
    card3.style.marginTop = '-40%'
        labels.forEach(function(label) {
            label.style.display = 'none'; // Schovej všechny labely
        });
        labelsVisible = false; // Změna proměnné
    }
}

function demo4() {
    var labels = document.querySelectorAll('.label4'); // Sežeň všechny "label"
    
    if (!labelsVisible) {
    button4.innerText = "- Tolerance"
    button.style.display = 'none'
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    card1.style.marginTop = '-5%'
    card2.style.marginTop = '-5%'
    card3.style.marginTop = '-5%'
        labels.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
            
        });
        labelsVisible = true; // Změna proměnné
    } else {
    button4.innerText = "+ Tolerance"
    button.style.display = 'block'
    button1.style.display = 'block'
    button2.style.display = 'block'
    button3.style.display = 'block'
    card1.style.marginTop = '-40%'
    card2.style.marginTop = '-40%'
    card3.style.marginTop = '-40%'
        labels.forEach(function(label) {
            label.style.display = 'none'; // Schovej všechny labely
        });
        labelsVisible = false; // Změna proměnné
    }
}

const filter = document.querySelector('[id = "type1"]');
let check = [];

filter.addEventListener('search', (e) => {
    e.preventDefault;

    document.querySelectorAll('[type ="checkbox"]').forEach(item => {
        if (item.checked === true){
            check.push(item.value);
        }
    })
})

console.log(check);
