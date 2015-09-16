// Atom Splitter will take a string value and manipulate individual characters
var atom = '';
var molecule = [];

// Reverses each character in a string value
var reverseSplitter = function(string){
  if(string){
    atom = string;
    molecule = atom.split("");
    molecule = molecule.reverse();
    atom = '';

    for (i=0; i < molecule.length; i++) {
      atom += molecule[i];
    }
    console.log("Results of the reverse splitter: " + atom);

  } else {
    console.log("You need to enter a word or words.");
  }
     
};

/* 
Instructions:

Copy all VARs into a console.
run: reverseSplitter("YOUR WORD OR WORDS")
Enjoy the results.

*/