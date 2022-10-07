//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.




var scope = JSON.parse(localStorage.getItem("scope"))|| [];
var hoisting =JSON.parse(localStorage.getItem("hoisting")) ||[];
var conFun =JSON.parse(localStorage.getItem("constructor functions")) || [];
var proto = JSON.parse(localStorage.getItem("prototype")) ||[];


function Info(topic, point1, point2, point3, point4, point5,) {
    this.topic = topic;
    this.point1 = point1; 
    this.point2 = point2; 
    this.point3 = point3; 
    this.point4 = point4; 
    this.point5 = point5; 
}

scope.push(
    new Info(
        "scope",
        "Scope in JavaScript refers to the current context of code",
        "which determines the accessibility of variables to JavaScript.",
        " The two types of scope are local and global: Global variables are those declared outside of a block",
        "Local variables are those declared inside of a block",
        "The scope is an important concept that manages the availability of variables. The scope is at the base closures, defines the idea of global and local variables."
    )
)
hoisting.push(
    new Info(
        
             "Hoisting",
             "Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program.",
            "It doesn't care about variable values. All it wants to know what variables are present in a program.",
             "Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. ",
            "It allows us to call functions before even writing them in our code. ",
            "JavaScript only hoists declarations, not the initializations.JavaScript allocates memory for all variables and functions defined in the program before execution."
            
    )
)
conFun.push(
    new Info(
            
    "Constructor Function",
    "A constructor is a special function that creates and initializes an object instance of a class.",
    "In JavaScript, a constructor gets called when an object is created using the new keyword.",
    "The purpose of a constructor is to create a new object and set values for any existing object properties.",
    "The this keyword begins to refer to the new object and it becomes the current instance object.",
    "The new object is then returned as the return value of the constructor.",
    
    )
)
proto.push(
    new Info(
        "Prototype",
        "The prototype is an object that is associated with every functions and objects by default in JavaScript",
         "The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.",
        "object's prototype property is invisible",
         " If you change function's prototype then only new objects will be linked to changed prototype.",
        " All other existing objects will still link to old prototype of function",
    )
)



localStorage.setItem("scope", JSON.stringify(scope));
localStorage.setItem("hoisting", JSON.stringify(hoisting));
localStorage.setItem("constructor functions", JSON.stringify(conFun));
localStorage.setItem("prototype", JSON.stringify(proto));


var btn1 = document.querySelector("#scope");
btn1.addEventListener("click", function () {
    DisplayData(scope);
})
var btn2 = document.querySelector("#hoisting");
btn2.addEventListener("click", function () {
    DisplayData(hoisting);
})
var btn3 = document.querySelector("#contructor_functions");
btn3.addEventListener("click", function () {
    DisplayData(conFun);
})
var btn4 = document.querySelector("#prototype");
btn4.addEventListener("click", function () {
    DisplayData(proto);
})


function DisplayData(array) {
    array.map(function (element) {
        document.getElementById("box").innerHTML = "";
        var topic = document.createElement("h2");
        topic.innerText = element.topic;
        var ul = document.createElement("ul")
        var point1 = document.createElement("li")
        point1.innerText = element.point1
        var point2 = document.createElement("li")
        point2.innerText = element.point2
        var point3 = document.createElement("li")
        point3.innerText = element.point3
        var point4 = document.createElement("li")
        point4.innerText = element.point4
        var point5 = document.createElement("li")
        point5.innerText = element.point5
        ul.append(point1, point2, point3, point4, point5)
        document.getElementById("box").append(topic,ul)
    })
}
