var labelsVisible = false;
var buttonFilled = false;
var recipeClicked = false;
var dish0 = document.getElementById("dish")
var recipe0 = document.getElementById("recipe")
var difficulty0 = document.getElementById("difficulty")
var price0 = document.getElementById("price")
var tolerance0 = document.getElementById("tolerance")

var checkbox1 = document.getElementById("c1")
var checkbox2 = document.getElementById("c2")
var checkbox3 = document.getElementById("c3")
var checkbox4 = document.getElementById("c4")
var checkbox5 = document.getElementById("c5")

var checkbox6 = document.getElementById("c6")
var checkbox7 = document.getElementById("c7")
var checkbox8 = document.getElementById("c8")
var checkbox9 = document.getElementById("c9")
var checkbox10 = document.getElementById("c10")

var checkbox11 = document.getElementById("c11")
var checkbox12 = document.getElementById("c12")
var checkbox13 = document.getElementById("c13")
var checkbox14 = document.getElementById("c14")                 // Všechny možné proměnné
var checkbox15 = document.getElementById("c15")

var checkbox16 = document.getElementById("c16")
var checkbox17 = document.getElementById("c17")
var checkbox18 = document.getElementById("c18")
var checkbox19 = document.getElementById("c19")
var checkbox20 = document.getElementById("c20")

var checkbox21 = document.getElementById("c21")
var checkbox22 = document.getElementById("c22")
var checkbox23 = document.getElementById("c23")
var checkbox24 = document.getElementById("c24")
var checkbox25 = document.getElementById("c25")

var checkbox26 = document.getElementById("c26")
var checkbox27 = document.getElementById("c27")
var checkbox28 = document.getElementById("c28")


function demo1(){ // Zobrazuje boxy s filtry
    var labels1 = document.querySelectorAll('.labels1')

    if(!labelsVisible){
        dish0.style.backgroundColor = 'black';
        dish0.style.color = 'white'
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        dish0.style.background = 'none';
        dish0.style.color = 'black'
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo2(){ // Zobrazuje boxy s filtry
    var labels1 = document.querySelectorAll('.labels2')

    if(!labelsVisible){
        recipe0.style.backgroundColor = 'black';
        recipe0.style.color = 'white'
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        recipe0.style.background = 'none';
        recipe0.style.color = 'black'
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo3(){ // Zobrazuje boxy s filtry
    var labels1 = document.querySelectorAll('.labels3')

    if(!labelsVisible){
        difficulty0.style.backgroundColor = 'black';
        difficulty0.style.color = 'white'
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        difficulty0.style.background = 'none';
        difficulty0.style.color = 'black'
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo4(){ // Zobrazuje boxy s filtry
    var labels1 = document.querySelectorAll('.labels4')

    if(!labelsVisible){
        price0.style.backgroundColor = 'black';
        price0.style.color = 'white'
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        price0.style.background = 'none';
        price0.style.color = 'black'
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo5(){ // Zobrazuje boxy s filtry
    var labels1 = document.querySelectorAll('.labels5')

    if(!labelsVisible){
        tolerance0.style.backgroundColor = 'black';
        tolerance0.style.color = 'white'
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        tolerance0.style.background = 'none';
        tolerance0.style.color = 'black'
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function blackout(){
    var card = document.querySelectorAll(".cards")

    if(!recipeClicked){
        card.style.display = 'none'
        recipeClicked = true;
    }else{
        card.style.display = 'initial'
        recipeClicked = false;
    }
}
