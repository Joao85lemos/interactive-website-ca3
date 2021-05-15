$(document).ready(cleanFields());

function verifyCheckBox() {
    var check = document.getElementsByName("checkStarter"); 
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            calculateStartersPrices(i);
        }  
    }
    
    check = document.getElementsByName("checkMain"); 
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            calculateMainPrices(i);
        }  
    }
    
    check = document.getElementsByName("checkDessert"); 
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            calculateDessertsPrices(i);
        }  
    }
    
    check = document.getElementsByName("checkdrink"); 
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            calculateDrinksPrices(i);
        }  
    }
    
    calculateTotalBill();
}

function calculateTotalBill() {
    var starter = parseFloat(document.getElementById("totalStarters").value);
    var main = parseFloat(document.getElementById("totalMain").value);
    var dessert = parseFloat(document.getElementById("totalDessert").value);
    var drink = parseFloat(document.getElementById("totalDrinks").value);
    
    document.getElementById("totalBill").value = starter + main + dessert + drink;
}

function calculateStartersPrices(checkBox) {
    var vegetarian = parseFloat(document.getElementById("totalVegetarian").value);
    var nonvegetarian = parseFloat(document.getElementById("totalNonVegetarian").value);
    var total = parseFloat(document.getElementById("totalStarters").value);

    var quantity = 0;
    var price = 0;
    
    switch(checkBox) {
        case 0:
            price = setPrices(checkBox + 1);
            quantity = parseInt(document.getElementById("starterQuantity1").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += price * quantity;
            }
            document.getElementById("totalStarters").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
            
        case 1:
            price = setPrices(checkBox + 1);
            quantity = parseInt(document.getElementById("starterQuantity2").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                vegetarian += price * quantity;
            }             
            document.getElementById("totalStarters").value = total + (quantity * price);
            document.getElementById("totalVegetarian").value = vegetarian;
            break;
        case 2:
            price = setPrices(checkBox + 1);
            quantity = parseInt(document.getElementById("starterQuantity3").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                vegetarian += price * quantity;
            }             
            document.getElementById("totalStarters").value = total + (quantity * price);
            document.getElementById("totalVegetarian").value = vegetarian;
            break;
        case 3:
            price = setPrices(checkBox + 1);
            quantity = parseInt(document.getElementById("starterQuantity4").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += quantity * price;
            }             
            document.getElementById("totalStarters").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
        case 4:
            price = setPrices(checkBox + 1);
            quantity = parseInt(document.getElementById("starterQuantity5").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += quantity * price;
            }             
            document.getElementById("totalStarters").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
    }
}

function calculateMainPrices(checkBox) {
    var vegetarian = parseFloat(document.getElementById("totalVegetarian").value);
    var nonvegetarian = parseFloat(document.getElementById("totalNonVegetarian").value);
    var total = parseFloat(document.getElementById("totalMain").value);

    var quantity = 0;
    var price = 0;
    
    switch(checkBox) {
        case 0:
            price = setPrices(checkBox + 6);
            quantity = parseInt(document.getElementById("mainQuantity1").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += price * quantity;
            }
            document.getElementById("totalMain").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
            
        case 1:
            price = setPrices(checkBox + 6);
            quantity = parseInt(document.getElementById("mainQuantity2").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += price * quantity;
            }             
            document.getElementById("totalMain").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
        case 2:
            price = setPrices(checkBox + 6);
            quantity = parseInt(document.getElementById("mainQuantity3").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                vegetarian += price * quantity;
            }             
            document.getElementById("totalMain").value = total + (quantity * price);
            document.getElementById("totalVegetarian").value = vegetarian;
            break;
        case 3:
            price = setPrices(checkBox + 6);
            quantity = parseInt(document.getElementById("mainQuantity4").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += price * quantity;
            }
            document.getElementById("totalMain").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
        case 4:
            price = setPrices(checkBox + 6);
            quantity = parseInt(document.getElementById("mainQuantity5").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } else {
                nonvegetarian += price * quantity;
            }             
            document.getElementById("totalMain").value = total + (quantity * price);
            document.getElementById("totalNonVegetarian").value = nonvegetarian;
            break;
    }
}

function calculateDessertsPrices(checkBox) {
    var total = parseFloat(document.getElementById("totalDessert").value);

    var quantity = 0;
    var price = 0;
    
    switch(checkBox) {
        case 0:
            price = setPrices(checkBox + 11);
            quantity = parseInt(document.getElementById("dessertQuantity1").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            } 
            document.getElementById("totalDessert").value = total + (quantity * price);
            break;
            
        case 1:
            price = setPrices(checkBox + 11);
            quantity = parseInt(document.getElementById("dessertQuantity2").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }             
            document.getElementById("totalDessert").value = total + (quantity * price);
            break;
        case 2:
            price = setPrices(checkBox + 11);
            quantity = parseInt(document.getElementById("dessertQuantity3").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }            
            document.getElementById("totalDessert").value = total + (quantity * price);
            break;
        case 3:
            price = setPrices(checkBox + 11);
            quantity = parseInt(document.getElementById("dessertQuantity4").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }              
            document.getElementById("totalDessert").value = total + (quantity * price);
            break;
        case 4:
            price = setPrices(checkBox + 11);
            quantity = parseInt(document.getElementById("dessertQuantity5").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }             
            document.getElementById("totalDessert").value = total + (quantity * price);
            break;
    }
}

function calculateDrinksPrices(checkBox) {
    var total = parseFloat(document.getElementById("totalDrinks").value);

    var quantity = 0;
    var price = 0;
    
    switch(checkBox) {
        case 0:
            price = setPrices(checkBox + 16);
            quantity = parseInt(document.getElementById("drinkQuantity1").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }
            document.getElementById("totalDrinks").value = total + (quantity * price);
            break;
            
        case 1:
            price = setPrices(checkBox + 16);
            quantity = parseInt(document.getElementById("drinkQuantity2").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }         
            document.getElementById("totalDrinks").value = total + (quantity * price);
            break;
        case 2:
            price = setPrices(checkBox + 16);
            quantity = parseInt(document.getElementById("drinkQuantity3").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }             
            document.getElementById("totalDrinks").value = total + (quantity * price);
            break;
        case 3:
            price = setPrices(checkBox + 16);
            quantity = parseInt(document.getElementById("drinkQuantity4").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }            
            document.getElementById("totalDrinks").value = total + (quantity * price);
            break;
        case 4:
            price = setPrices(checkBox + 16);
            quantity = parseInt(document.getElementById("drinkQuantity5").value);
            if (quantity < 0 || isNaN(quantity)) {
                quantity = 0;
            }            
            document.getElementById("totalDrinks").value = total + (quantity * price);
            break;
    }
}

function setPrices(option) {
    switch(option) {
        case 1: 
            return 7.75;
            break;
        case 2: 
            return 7.20;
            break;
        case 3: 
            return 4.20;
            break;
        case 4: 
            return 9.50;
            break;
        case 5: 
            return 4.90;
            break;
        /*-----------------*/
        case 6: 
            return 26.5;
            break;
        case 7: 
            return 18.85;
            break;
        case 8: 
            return 14.25;
            break;
        case 9: 
            return 26.5;
            break;
        case 10: 
            return 22.35;
            break;
        /*-----------------*/
        case 11: 
            return 9.15;
            break;
        case 12: 
            return 7.70;
            break;
        case 13: 
            return 6.00;
            break;
        case 14: 
            return 6.90;
            break;
        case 15: 
            return 7.85;
            break;
        /*-----------------*/
        case 16: 
            return 3.25;
            break;
        case 17: 
            return 2.75;
            break;
        case 18: 
            return 9.50;
            break;
        case 19: 
            return 8.70;
            break;
        case 20: 
            return 6.50;
            break;
        /*-----------------*/
    }
}

function cleanFields() {
    document.getElementById("totalBill").value = 0;
    document.getElementById("totalStarters").value = 0;
    document.getElementById("totalMain").value = 0;
    document.getElementById("totalDessert").value = 0;
    document.getElementById("totalDrinks").value = 0;
    document.getElementById("totalVegetarian").value = 0;
    document.getElementById("totalNonVegetarian").value = 0;
}