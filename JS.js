//Q;1-What is type conversion?
    //To convert variables into new variables and other data types.
    //number
    

    // let a = Number("8");
    // console.log(typeof(a));
    

    //string

    // let a = String(10);
    // console.log(typeof(a));
    

    //boolean

    //let a = Boolean("27");
    //console.log(typeof(a));
    

    //Q.no2-Number data types method?


    //valueOf()
    //let a = "babar";
    //let b = a.valueOf(a);
    //document.write(b);



    //toString()
    //let a = 17;
    //let b = a.toString();
    //alert(typeof(b));



    //toFixed()
    //let a = 1.92456;
    //let b = a.toFixed(2);
    //alert(b);
    

    //toPrecision()
    //let a = 1.92456;
    //let b = a.toPrecision(2);
    //alert(b);

    //toExponential()
    //let a = 1.92456;
    //let b = a.toExponential(2);
    //alert(b);



    //Q.no.3:what is assign by value?

    //let students=80;
    //let newstudents=students;
    //newstudents=80;
    //document.write(students);


    //Q.no:4:what is assign by reference?

    //let obj={
        // name:"hello",
    //     age:333,
    //     class:32
    // }

    // let newobj={};
    // for(let key in obj){
    //     newobj[key] = obj[key];
    // }

    // newobj.age=33;
    // document.write(obj.age);



    

    // function myfunction(){
    //     var carname = "volvo";
    // }
    
    // console.log("carname");


    // var a = ["awa" , "amlo" , "chup"];

    // document.write(a);

    // var b = a.slice(1);
    // document.write(b); 


    //Generater function
    // function* generater (a, b){
    // yield a;
    // yield a + 10;
    // yield b;
    // yield b + 20;
    // }
    // let gen = generater(10, 20);
    // console.log(gen.next().value);
    // console.log(gen.next().value);
    // console.log(gen.next().value);

    //call function

    // var sam = {
    //     fullName: function(){
    //         return this. firstname + " " + this.lastname;
    //     }
    // }

    // var name1 = {
    //     firstName: "Mario",
    //     lastName: "Gotza"

    // }

    // var name2 = {
    //     firstName: "Kevin",
    //     lastName: "Brown"
    // }

    // sam.fullName.call(name1);



    //globel scope

    // var a = "shamoo";

    // function hello(){
    //     document.write(a);
    // }
    // hello();



    // let str = "shan";
    // console.log(str.__proto__);
    // console.log(str(0).toUpperCase()+ string.slice(1);





    //closure

    // var add = (function(){
    //     var counter = 0;
    //     return function () {counter +=1; return counter }
    // })();
    // document.write(add);
    // add();
    // add();
    // add();



    // var x, y, z;  //statement 1

    // x = 5;   //statement 2
    // y = 6;    //statement 3
    // z = x + y;  //statement 4

    // document.write(z);


    // var x = "10";
    // var y = "20";
    // var z = x + y;

    // document.write(z);


    // var a = Math.PI;

    // document.write(a);


    // var a = Math.ceil(5.2);

    // document.write(a);


    // var a = Math.round(4.3);

    // document.write(a);


    // var a = Math.floor(9.3);

    // document.write(a);




    // var a = Math.trunc(8.7);

    // document.write(a);




    // var a = Math.sign(-5.2);

    // document.write(a);



    // var a = Math.pow(9, 2);

    // document.write(a);

    // var a = Math.sqrt(100);

    // document.write(a);



    //statements



    // var age = 20;


    // if (age >=18 && age <=21){
    //     console,log("awa un ba");
    // }

    

    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // function isoddnumber(number) {
    //     return number % 2;
    // }
    // const oddNumbers = numbers.filter(isoddNumber);
    // console.log(oddNumbers); // [ 1, 7, 3, 5 ]


    //call back function


    // function lay(am) {
    //     document.write(am);
    // }

    // function ala(a,b,c){
    //     let sum = a + b + c;
    //     return sum;

    // }

    // let result = ala(10, 15, 20);
    // lay(result);



    //capitalize first character

    // let String = "salam";
    // document.write(String[0].toUpperCase() + String.slice(1));





    //genrate date


    // var gunx = new Date();
    // document.write(gunx.getDate());

    

    //default parameter


    // function shahu(a, b, c = 10) {
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);

    // }
    
    // shahu(5, 8);
        
        



        // spread operator



    // let arr = ['a' , 'b' , 'c'];
    // let arr2 = arr;

    // console.log(arr2);


    // function output(a, b){
    //    return  a + b;  
        
        
    // }

    
    // console.log(output(10, 20));


    // function lay(){
    //     console.log("hello");
    // }

    // lay();
    
        

    // table using for loop


    // let a = 1;
    // for(let a = 1; a<=10; a++){


    // }
    // console.log( "2" + " * " + a + " = " + a*2);
    


    //nested loop

    // for(i=0; i<5; i++){

    //     document.write("<Strong>Outer Loops</Strong>");
    //     document.write(i);
    //     document.write("<br>");


    // for(j=0; j<9; j++){
    //     document.write("Inner Loops");
    //     document.write(j);
    //     document.write("<br>");
    //     }

    //  }

    //for loop


    // for(a=0; a<3; a++){
    //     document.write(a);
    // }



    //while loop


    // var a = 1;

    // while(a<4){
    //     document.write(a);
    //     a++;
    //     document.write("<br>");
    // }

    
    //do while


    // var a = 5;

    // do{
    //     document.write(a);
    //     a++;
    //     document.write("<br>");
    // }
    // while(a<19);

    // var a ={
    //     name : 'shahan',
    //     age : '21',

    // }
    // for(var ctrl in a){
    //     document.write(a[ctrl]);
    //     document.write("<br>");
    // }




    // function name() {
    //         var person = {
    //             fname:"Shahan",
    //             lname:"Yousf",
    //             age:21
    //         };
    //         var text = "";
    //         var x;
    //         for (x in person){
    //             text += person[x] + " ";
    //         }
    //         document.write(text);
            
    //     }
    //     name();



    // let a = 5;
    // for(var i =1; i<=10; i++){
    // var result =  a * i
    // console.log( ` ${a} X ${i} ${result}`)

    // }


    // for of


    // let a = ["hansian","asad","baig"];
    // let n;
    // for (n of a){
    //     document.write(n + "<br>");
    // }


    // by value


    
    // let val = 20;
        
    // let newval = val;
    // val=30;

    // console.log(newval);

    //by reference

    // let obj ={
    //     name: "Salman"
    // }
    // let newobj = obj
    // newobj.name = "Shahan";
    // console.log(newobj.name);




    // let obj ={
    //     name: "key",
    //     age: "hey"

    // }
    // let newobj ={}
    // newobj.name =obj.name;
    // for(let key in obj){
    //     newobj.name =obj.name;
    //     newobj.age =obj.age;
    //     console.log(key + " : " + newobj[key]);
    // }
    // newobj.name = "shahan";
    // console.log(obj);
    // console.log(newobj);


    

    //destucturing array

    // let user = ["shahan yousf", 20, "danyore"];
    // let [name, age, city] = user;

    // console.log(name);
    // console.log(age);
    // console.log(city);


    //destructuring object


    // let user = {
    //     name: "Shahan yousf",
    //     age: 21,
    //     city: "Danyore"
    // }
    // let {name:n, age:a, city:c} = user;

    // console.log(n);
    // console.log(a);
    // console.log(c);



// let arr = [
//     "shahu",
//     "asif",
//     16
// ]
//     console.log(typeof(arr));

//     let arr1 = JSON.stringify(arr);
//     console.log(arr1);
//     console.log(typeof(arr1));


//     let arr2 = JSON.parse(arr1);
//     console.log(arr2);
//     console.log(typeof(arr2));


//queue


// int enqueue(int data)
//   if(isfull())
//     return 0;
    
//     rear = rear + 1
//     queue[rear] = data;

//     return 1;


// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                 }
//             }
//         }
//     }
// };

// console.log(list);


// class listNode {
//     constructor(data) {
//         this.data = data
//         this.data = null
//     }
// }




//arrays and sets


// let mySet = new Set();
// mySet.add('hello', "hello");


// console.log(mySet);

//array shift

//deletes the first value in an array

// let friuts = ["banana", "cherry", "apple", "orange"];
// friuts.shift();

// console.log(friuts);


//unshift array

//add new values to beginning of an array

// let ppl = ["asif", "zilan", "zameer", "hasnain",];
// ppl.unshift('faran', 'kashan');

// console.log(ppl);


//push array

//add new values to an array


// let city = ["gilgit", "danyore", "hunza", "gojal"];
// city.push('moorkhun', 'aliabad');

// console.log(city);


//pop array

//delete the last item from an array


// let age = ["12", "21", "22", "23", "25"];
// age.pop();

// console.log(age);



//splice array
//delet/add from an array

// let phal = ["Banana", "Orange", "Apple", "Mango"];
// phal.splice(2, 2, "Lemon", "Kiwi");

// console.log(phal);


//for each loop


// let num = ["1", "2", "3"];
// num.forEach(myFunction);

// console.log(num);


// let mySet = new Set();

// mySet.add();

// let obj = {'1': '2', '3': '4'};

// mySet.add(obj);
// const text = mySet.has(3);

// console.log(text);


// let zilo = new Set([1, 2, 3 ,4]);
// let arr= Array.from(zilo);
// console.log(arr.includes(3));


// let x = new Function(14, 13);


// function myFunction() {
//     let zilo = [1, 2, 3, 4];
//     console.log(zilo.includes(3));
// }
// myFunction(); 

// var friuts = ["apple", "orange", "banana"];
// friuts.constructor;

// console.log(friuts);

// a program to pass a function as parameter to calculate a value


// function myFunction(a, b) {
//     return a + b;
// }


// console.log(myFunction(10, 10));





//a program to find any item in an array

// let ages = [3, 10, 18, 20];
//     console.log(ages);
//     let b = ages.find(checkAdult);;
//     console.log(b);
//     function checkAdult(age){
//         return age >=18;
//     }


// function hello(a, b) {
//     return a * b;

// }
// console.log(hello(12, 13));


// let x = myFunction(10, 10);


// function myFunction(a, b){
//     return a + b;
// }
// console.log(x);










