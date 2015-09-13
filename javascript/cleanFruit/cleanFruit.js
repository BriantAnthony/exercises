var fruits = ["apple", "orange", "pineapple", "grape", "peach", "mango"];
var basket = []; 

var addFruit = function(fr){

	if(fr){
		// Checks the fruits array for the fruit name and only adds a unique fruit to the array.
		var a = fruits.indexOf(fr);
		if (a==-1){
			fruits.push(fr)
			console.log("Successfully added " + fr + " to the bunch!");
		} else {
			console.warn(fr + " already exists in the bunch, pick another.")
		}
	
	} else {
		console.log("You didn't name a fruit to add! Try again.");
	}	
};

var fruitsToBasket = function(){
	if(fruits.length > 0){
		for (f=0; f < fruits.length; f++){
			basket.push(fruits[f]);
			//delete fruits[f];
		}
	}
	console.log("The basket: " + basket);
	console.log("The fruit section: " + fruits);
};

var basketGetsDirty = function(){
	if(basket.length > 0){
		for (b=0; b < basket.length; b++){
			basket[b] += b+1;
		}
	}
	console.log("The fruit is all dirty, we have to clean it now!");
};

var cleanFruit = function(){
	if(basket.length > 0){
		for(b=0; b < basket.length; b++){
			if(basket[b] !== fruits[b]){
				basket[b] = basket[b].substring(0, basket[b].length-1);
			}
		}
	}
	console.log("Fruit clean cycle complete.");
};

var dumpBasket = function(){
	if(basket.length > 0){
		basket = [];
		console.log("basket dumped!");
	}
};

var sortFruit = function(){
	fruits.sort();
	basket = fruits;
	console.log("Fruits are now sorted alphabetically.");
};

// program start
console.log("Welcome to Clean Fruit");

