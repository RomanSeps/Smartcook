<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smartcook</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
    <h1>Smartcook</h1>      <!-- Nadpis stránky -->
    <button class="h-btn">Home</button>
    <button class="h-btn">About us</button> <!-- Tlačítka 1 -->
    <button class="h-btn">Recipes</button>
    </div>
    <hr>        <!-- Designová čára -->

    <div class="welcome">
        <div class="list">
            <h2>Welcome to Smartcook!</h2>
            <p class="welcome-p">Are you hungry and don't know what to cook?<br> Well, we got you covered!<br> 
                With our wide range of recipes, you will never find yourself running out of ideas on what to cook!<br>
                It's super simple just pick anything that sounds / looks interesting, click on it and you can start cooking!<br>
                It's free, simple and easy to use! Start using Smartcook today!
            </p>
            <a href=""><button class="w-btn">About us</button></a>
        </div>
    </div>


    <div class="idk">
    <button class="m-btn" id="dish" onclick="demo1()">Dish category</button>
    <button class="m-btn" id="recipe" onclick="demo2()">Recipe category</button>
    <button class="m-btn" id="difficulty" onclick="demo3()">Difficulty</button>         <!-- Tlačítka 2 -->
    <button class="m-btn" id="price" onclick="demo4()">Price</button>
    <button class="m-btn" id="tolerance" onclick="demo5()">Tolerance</button>
    </div>

        <div class="checkboxes">
        <input class="labels1" type="checkbox" id="c1" value="breakfast">
        <label class="labels1" for="c1" id="c1" >Breakfast</label>
        <input class="labels1" type="checkbox" id="c2" value="lunch">
        <label class="labels1" for="c2" id="c2" >lunch</label>                      <!-- Boxy pro filtry -->
        <input class="labels1" type="checkbox" id="c3" value="dinner">
        <label class="labels1" for="c3" id="c3" >dinner</label>
        <input class="labels1" type="checkbox" id="c4" value="snack">
        <label class="labels1" for="c4" id="c4" >snack</label>
        </div>

        <div class="checkboxes">
            <input class="labels2" type="checkbox" id="c5" value="soup">
            <label class="labels2" for="c5" id="c5" >soup</label>
            <input class="labels2" type="checkbox" id="c6" value="meat">
            <label class="labels2" for="c6" id="c6" >meat</label>
            <input class="labels2" type="checkbox" id="c7"value="meat free">
            <label class="labels2" for="c7" id="c7">meat free</label>
            <input class="labels2" type="checkbox" id="c8" value="dessert">
            <label class="labels2" for="c8" id="c8">dessert</label>
            <input class="labels2" type="checkbox" id="c9" value="sauce">
            <label class="labels2" for="c9" id="c9">sauce</label>                   <!-- Boxy pro filtry -->
            <input class="labels2" type="checkbox" id="c10" value="pasta">
            <label class="labels2" for="c10" id=c"10">pasta</label>
            <input class="labels2" type="checkbox" id="c11" value="salad">
            <label class="labels2" for="c11" id=c"11">salad</label> 
            <input class="labels2" type="checkbox" id="c12" value="sweet food">
            <label class="labels2" for="c12" id=c"12">sweet food</label>
            <input class="labels2" type="checkbox" id="c13" value="drink">
            <label class="labels2" for="c13" id=c"13">drink</label>
                </div>

        <div class="checkboxes">
            <input class="labels3" type="checkbox" id="c14" value="simple">
            <label class="labels3" for="c14" id=c"14">Simple</label>
            <input class="labels3" type="checkbox" id="c15" value="d-medium">           <!-- Boxy pro filtry -->
            <label class="labels3" for="c15" id=c"15">Medium</label>
            <input class="labels3" type="checkbox" id="c16" value="difficult">
            <label class="labels3" for="c16" id=c"16">difficult</label>
        </div>

        <div class="checkboxes">
            <input class="labels4" type="checkbox" id="c17" value="cheap">
            <label class="labels4" for="c17" id=c"17">Cheap</label>
            <input class="labels4" type="checkbox" id="c18" value="p-medium">           <!-- Boxy pro filtry -->
            <label class="labels4" for="c18" id=c"18">Medium</label>
            <input class="labels4" type="checkbox" id="c19" value="expensive">
            <label class="labels4" for="c19" id=c"19">Expensive</label>
                </div>

        <div class="checkboxes">
            <input class="labels5" type="checkbox" id="c20" value="vegetarian">
            <label class="labels5" for="c20" id=c"20" >vegetarian</label>
            <input class="labels5" type="checkbox" id="c21" value="vegan">
            <label class="labels5" for="c21" id=c"21" >vegan</label>
            <input class="labels5" type="checkbox" id="c22"value="nuts">
            <label class="labels5" for="c22" id=c"22">nuts</label>
            <input class="labels5" type="checkbox" id="c23" value="gluten">
            <label class="labels5" for="c23" id=c"23">gluten</label>
            <input class="labels5" type="checkbox" id="c24" value="lactose">
            <label class="labels5" for="c24" id=c"24">lactose</label>               <!-- Boxy pro filtry -->
            <input class="labels5" type="checkbox" id="c25" value="spicy">
            <label class="labels5" for="c25" id=c"25">spicy</label>
            <input class="labels5" type="checkbox" id="c26" value="alcohol">
            <label class="labels5" for="c26" id=c"26">alcohol</label> 
            <input class="labels5" type="checkbox" id="c27" value="sea food">
            <label class="labels5" for="c27" id=c"27">sea food</label>
            <input class="labels5" type="checkbox" id="c28" value="mushrooms">
            <label class="labels5" for="c28" id=c"28">mushrooms</label>
        </div>

        <div id="card-container" class="container">         <!-- Div pro zarovnání receptů -->
        <?php 

                require_once("SmartCookClient.php");

                $request_data = [
                    "attributes" => ["id", "name", "author", "difficulty", "price"],
                    "filter" => [
                    ]
                ];

                try {
                    $data = (new SmartCookClient)
                        ->setRequestData($request_data)
                        ->sendRequest("recipes")
                        ->getResponseData();
                } catch (Exception $e) {
                    echo $e->getMessage();
                } 

                foreach($data["data"] as $key => $value) {
                    echo "<div class='cards' onclick='blackout()'> 
                                    <h2>".$value["name"]."</h2>
                                    <div class='inner-container'>
                                        <p class='text'>". "Difficulty: ".$value["difficulty"]."<br>
                                                            Price: ".$value["price"]."</p>
                                        <img class='image'>
                                    </div>
                        </div>";
                }
        ?>
        </div>

        <footer>
            <h3>SMARTCOOK</h3>
            <a href=""><p class="p-footer">Facebook</p></a>
            <a href="https://www.skolavdf.cz"><p class="p-footer">SkolaVDF</p></a>
            <p class="p-footer">© All rights reserved</p>
        </footer>
    

    <script src="script.js"></script>
</body>
</html>
