var labelsVisible = false;
var buttonFilled = false;
var all = document.getElementById("all");
var dish = document.getElementById("dish")
var recipe = document.getElementById("recipe")
var difficulty = document.getElementById("difficulty")
var price = document.getElementById("price")
var tolerance = document.getElementById("tolerance")

function demo1(){
    var labels1 = document.querySelectorAll('.labels1')

    if(!labelsVisible){
        dish.style.backgroundColor = 'aqua';
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        dish.style.background = 'none';
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo2(){
    var labels1 = document.querySelectorAll('.labels2')

    if(!labelsVisible){
        recipe.style.backgroundColor = 'aqua';
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        recipe.style.background = 'none';
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo3(){
    var labels1 = document.querySelectorAll('.labels3')

    if(!labelsVisible){
        difficulty.style.backgroundColor = 'aqua';
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        difficulty.style.background = 'none';
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo4(){
    var labels1 = document.querySelectorAll('.labels4')

    if(!labelsVisible){
        price.style.backgroundColor = 'aqua';
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        price.style.background = 'none';
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

function demo5(){
    var labels1 = document.querySelectorAll('.labels5')

    if(!labelsVisible){
        tolerance.style.backgroundColor = 'aqua';
        buttonFilled = true;

        labels1.forEach(function(label) {
            label.style.display = 'block'; // Ukaž labely
        });
        labelsVisible = true;

    }else{
        
        tolerance.style.background = 'none';
        buttonFilled = false;

        labels1.forEach(function(label) {
            label.style.display = 'none'; 
            
        });

        labelsVisible = false;
    }
}

const cardsContainer = document.querySelector('#card-container');

const data = fetch('https://www.smartcook-project.eu/api/recipes')
    .then((response) => response.json())
    .then((characters) => console.log(characters.data));

    function renderCharacters(characters) {
        characters.forEach(character => {
          const div = document.createElement('div');
          const name = document.createElement('h2');
          const difficulty = document.createElement('p')
          const price = document.createElement('p')
          div.classList = 'cards'
          name.innerText = ` ${character.name}`
          difficulty.innerText = `Difficulty: ${character.difficulty}`
          price.innerText = `Price: ${character.price}`

          div.appendChild(name)
          div.appendChild(difficulty)
          div.appendChild(price)
          cardsContainer.appendChild(div)
})
};

fetch('https://www.smartcook-project.eu/api/recipes')
    .then((response) => response.json())
    .then((characters) => renderCharacters(characters.data));

