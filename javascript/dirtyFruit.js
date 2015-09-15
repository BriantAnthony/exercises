var fruits = ["apple","orange","banana","peach","mango","lemon","pineapple"];
var basket = [];

// Add fruit to basket
var addFruit = function(){
  for(f=0; f < fruits.length; f++){
    basket.push(fruits[f] + ([f]+=1));
    console.log("Fruit Added to Basket");
  }
}

// Empty fruit from basket
var emptyFruit = function(){
  if(basket.length!==0){
    var all = basket.length;
    for(f=0; f < all; f++){
      var i = basket[f];
      delete i
    }
  
  }
}
