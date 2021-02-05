const student = {
    "name": "Sal",
    "age": 20,
    "occupation": "Student"
}

const studentToString = JSON.stringify(student);
console.log(typeof studentToString);

const studentToJSON = JSON.parse(studentToString);
console.log(typeof studentToJSON);

//Displaying our JSON on the HTML web page
var mainContainer = document.getElementById("myData");

var div = document.createElement("div");
var div2 = document.createElement("div2");
var div3 = document.createElement("div");


//If I had more people in my student object, I would make it an array and loop through the array and do these 3 actions for every iteration.
div.innerHTML = 'Name: ' + studentToJSON.name;
mainContainer.appendChild(div);

div2.innerHTML = 'Age: ' + studentToJSON.age;
mainContainer.appendChild(div2);

div3.innerHTML = 'Occupation: ' + studentToJSON.occupation;
mainContainer.appendChild(div3);



