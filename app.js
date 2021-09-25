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