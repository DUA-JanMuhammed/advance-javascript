#assignment 4

//We have an array of cities. Assign each city in different individual variable. 
// hint ['LA', 'new york', 'karachi','islamabad']


// let [city1,city2,city3,city4] = ['LA', 'new york', 'karachi','islamabad']
// console.log(city1)

//We have a student object. Assign each property in different and individual variable in JS 
// {name:'Marry',age:20,rollNo:2}
// const stdInfo = {
//     name:'Marry',
//     age:20,
//     rollNo:2}
// const {name,age,rollNo} = stdInfo
// console.log(rollNo)
// console.log(age)
// console.log(name)

// const o = {name:'Marry',
// age:20,
// rollNo:2};
// const {name: StName, age: StAge} = o;

// console.log(StName); 
// console.log(StAge); 

//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]




//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// function num(a, b, c , d, e) {
//     console.log(a);
//     console.log(b);
//     console.log(c); 
//     console.log(d); 
//     console.log(e); 
//   }

//   const arr = [1,2,3,4,5]
//   num(...arr);


//Given an array of firstname and an array of last name. First check both array size is equal or not, 
//if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

// let FullNames = (firstNames.length == lastNames.length) ? firstNames + " " + lastNames : "missing values"

//Create an arrow function that takes array as an input and make each element double and then return an array 

//  const numbers = [1,2,3,4,5];
//  const double = numbers.map(num => num*num);
//  console.log(double);  

//Create an arrow function that takes a number and return square of a number

// num=(a)=> {
//  return a*a

// }
//  console.log(num(3))

/*question: 
`var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/

/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */


//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

 
/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time
*/

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.






// assignment#3

// 1. write a program which shows the couter after each second.
// function clock() {
//        //shows time
//        var d = new Date();
//        var hours = d.getHours();
//        var min = d.getMinutes();
//        var sec = d.getSeconds();
    
//        console.log(`Current time = ${hours}:${min}:${sec}`)
    
//     }
//     setInterval(clock, 1000);

// 2. write a function which takes your name and displays the greeting with your name

// displayName = (name) => "hello "+ name
// var myName = prompt("Enter your name:")
// console.log(displayName(myName))

// 3. write a function(arrow function) which takes two values and return its sum as a result.

// returningSum = (num1,num2) => num1+num2
// console.log(returningSum(3,124))

// 4. write a function(arrow function) which takes a number and multiply it with 0.5 and return the new value.
//  print the new value outside the function

// returningMulitipliedValue = (num) => "The multiplied value is: "+num * 0.5
// console.log(returningMulitipliedValue(10))


// 5. print simple array of [1,2,3,4,5] with the help of array map funtion

// let arr =[1,2,3,4,5]
// let AR= arr.map((i)=>i)
// console.log(AR)

// 6.  let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// iterate the given array through map function and print the name and id

// let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// let arr2 = arr.map((i)=> console.log(i.id +" "+ i.name) )
