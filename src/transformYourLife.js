var loop = function(collection, callback){

  if (Array.isArray(collection) || typeof collection === 'string'){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
 

    }
	} 

  else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }

  }
};


// 1. Build transform.
var transform = function(collection, callback){
	var results = [];
	loop(collection, function(item, key){
		results.push(callback(item, key));
	});
	return results;
};

// 2. allNumbersMultipliedByThree
var numbers = [1, 2, 3, 4, 5];

var allNumbersMultipliedByThree = transform(numbers,function(item){
	return item*3;
	});

console.log(allNumbersMultipliedByThree);

// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";

var bestSentenceToUpperCase = (transform(bestSentence, function(item){
  return item.toUpperCase();

})).join('');

console.log(bestSentenceToUpperCase);

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

var collectedContents = transform(person, function(value, key){
  console.log (key, value);
  return [key, value];
  
})
console.log(collectedContents);

// 5. multByThree
var multByThree = function (collection){
  return transform(collection, function(number){
    return number * 3;
  });
}

console.log (multByThree(numbers));

// 6. upperCase
var upperCase = function(myString){
  var upperArray = transform(myString, function(letter){
    return letter.toUpperCase();
  });
  return upperArray.join('');
};

console.log(upperCase("Welcome World"));

// 7. contentsCollection
var contentsCollection = function(myObject){
  return transform(myObject, function(
    value, key){
    return [key,value];
  });
}
var person = {name: 'Jon', greatestFear: 'fearItself'};
console.log(contentsCollection(person));

// 8. multByWhatever
var numbers =[1,2,3,4,5];
var multByWhatever = function(collection, inputNum){
  return transform(collection, function(number){
    return number * inputNum;
  });
};

console.log(multByWhatever(numbers, 2));

// 9. divideByWhatever
var divideByWhatever = function(collection, inputNum){
  return transform(collection, function(number){
    return number/inputNum;
  });
};

console.log(divideByWhatever(numbers, 2));

// 10. switchCase
var bestSentence="This is the best six week course ever!";
var switchCase = function(sentence, myCase){
  if (myCase === 'lower'){
    var lowerArray= transform(sentence, function(letter){
      return letter.toLowerCase();
    });
    return lowerArray.join('');
  }
  else if (myCase === 'upper'){
    var upperArray = transform(sentence, function(
      letter){
      return letter.toUpperCase();
    });
    return upperArray.join('');
  };
};

console.log(switchCase(bestSentence, 'lower'));
console.log(switchCase(bestSentence, 'upper'));
//this is a test
// 11. contentsCollector
var contentsCollector = function (myObject, specifier){
  if (specifier === "keys"){
    return transform (myObject, function(value, key){
      return key; 
    })
  } else if (specifier === "values") {
    return transform (myObject, function(value){
      return value;
    })
  } else {
    return transform (myObject, function(value, key){
        return [key, value];
    })
  }
}

console.log(contentsCollector(person));
// 13. makeArray
var makeArray = function (number){
  var emptyArray = [0];

  emptyArray.length = number + 1;
  loop (emptyArray, function(element, index){
    
    emptyArray.push;
  }) 
}
console.log (makeArray(3));


// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
