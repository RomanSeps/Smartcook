var labelsVisible = false;
var buttonFilled = false;
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

const cardsContainer = document.querySelector('#card-container');

const data = fetch('https://www.smartcook-project.eu/api/recipes') // Shání data (pravděpodobně bude potřeba upravit)
    .then((response) => response.json())
    .then((characters) => console.log(characters.data));

    function renderCharacters(characters) { // Čte data
        characters.forEach(character => {
          const div = document.createElement('div');
          const text = document.createElement('div')
          const name = document.createElement('h2');
          const difficulty = document.createElement('p')
          const price = document.createElement('p')
          const dish_category = document.createElement('p')
          const recipe_category = document.createElement('p')

          div.classList = 'cards'
          text.classList = 'text'
          name.innerText = ` ${character.name}`
          difficulty.innerText = `Difficulty: ${character.difficulty}`
          price.innerText = `Price: ${character.price}`
          dish_category.innerText = `Dish category: ${character.dish_category}`
          recipe_category.innerText = `Dish category: ${character.recipe_category}`

          div.appendChild(name)
          div.appendChild(text)
          text.appendChild(difficulty)
          text.appendChild(price)
          text.appendChild(dish_category)
          text.appendChild(recipe_category)
          cardsContainer.appendChild(div)

})
};

function filters(characters){ // Filtry (WIP)(Nefunkční, potřebuje další parametry z API)
    characters.forEach(character => {
        //Filters 1:
        if(checkbox1.checked){
            if(dish_category = 1){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox2.checked){
            if(dish_category = 2){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox3.checked){
            if(dish_category = 3){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox4.checked){
            if(dish_category = 4){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox5.checked){
            if(dish_category = 5){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        //Filters 2:

        if(checkbox6.checked){
            if(recipe_category = 1){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox7.checked){
            if(recipe_category = 2){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox8.checked){
            if(recipe_category = 3){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox9.checked){
            if(recipe_category = 4){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox10.checked){
            if(recipe_category = 5){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox11.checked){
            if(recipe_category = 6){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox11.checked){
            if(recipe_category = 7){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox12.checked){
            if(recipe_category = 8){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox13.checked){
            if(recipe_category = 9){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        //Filters 3:

        if(checkbox14.checked){
            if(difficulty = 1){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox15.checked){
            if(difficulty = 2){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox16.checked){
            if(difficulty = 3){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        //Filters 4:

        if(checkbox17.checked){
            if(price = 1){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox18.checked){
            if(price = 2){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox19.checked){
            if(price = 3){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        //Filters 5:

        if(checkbox20.checked){
            if(tolerance = 1){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox21.checked){
            if(tolerance = 2){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox22.checked){
            if(tolerance = 3){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox23.checked){
            if(tolerance = 4){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox24.checked){
            if(tolerance = 5){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox25.checked){
            if(tolerance = 6){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox26.checked){
            if(tolerance = 7){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox27.checked){
            if(tolerance = 8){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

        if(checkbox28.checked){
            if(tolerance = 9){
                character.style.display = 'block'
            }else{
                character.style.display = 'none'
            };
        }

    });
}

fetch('https://www.smartcook-project.eu/api/recipes') // Zobrazuje data
    .then((response) => response.json())
    .then((characters) => renderCharacters(characters.data));
