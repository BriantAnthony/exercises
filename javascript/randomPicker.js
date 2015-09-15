var numberBox = [];

var saveNumber = function(n){
	if(numberBox.length < 10){
		numberBox.push(n);
	} else {
		console.log("The number box will accept no more entries. Please use the randomizer with randomizer().");
	}
	
};

var randomizer = function(){
	var randomNumberKey = Math.floor((Math.random() * numberBox.length) + 0)
	for (i=0; i < numberBox.length; i++){
		console.log( "Your number is " + numberBox[randomNumberKey] );
		numberBox = [];
		
		console.log('Number box destroy, please start over!');
	}
};