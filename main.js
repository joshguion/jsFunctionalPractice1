function sayHello(name) {
  console.log("Hello " + name );
  return "Hello " + name;
}

var helloText = sayHello();





//function to count characters
function characterCount(sentence) {
  var charCount = sentence.split(" ").join("").length;
  return charCount;
}




//Function to count words
function wordCount(words) {
  console.log(words.split(" "));
  return words.split(" ").length
}


function sum(x,y) {
  console.log(arguments);
  if(typeof x === "number" && typeof y === "number") {
    return x + y;
  }else {
    return "Sorry, must be a number"
  }
  // return x + y;
  // console.log(x + y)
}





//for loop to add totals

function sub() {

  var args = [].slice.call(arguments);
  var total = 0;
  for(var i = 0; i < args.length ; i++ ) {
    total = total + args[i];
    console.log(total);
    return total;
  }
}

sum(2,3,5,6,87)




var myArr = ["random", "things", "go", "here"]

for(var i = 0; i < myArr.length; i++) {
  myArr[i] = myArr[i] + " bear";
}



//forEach
myArr.forEach(function(element, index, arr){
      console.log("element: ", element);
      console.log("index: ", index);
      console.log("array: ", arr);
});

var textArr = ["pluto", "rocks"];
function addText(element, index, arr) {
    arr[index] = element + "text";
}

textArr.forEach(addText);




var myObj = { awesome: "yeah", anotherProp: "property rules "}






for(var i = 0; i < 3; i++) {
  console.log(i);
}
