"use strict";
// // var uName:string|number;
// // uName ="777"
// // uName=777
// // let some = "sdf"
// // var color ="black"
// //------
// const myFunct=(a:number,b:number)=>{
//     return a+b;
// }
// const optionlFunction=(a:number,b:number,c:string="true")=>{
//     console.log(c)
//     return a+b+c;
// }
// console.log(optionlFunction(7,3))
//------------------------------------------------------------
//type aliases
// type userID = (number | string)
// type userType ={name:string,age:number}
// const userDetails =(id:userID,userInfo: userType)=>{
//     console.log(id)
//     return userInfo
// }
//----------------------------------------------------------
//function signature
// let sigFunc : (a:number,b:number)=> number;
// sigFunc=(a:number,b:number)=>{
//     console.log(a)
//     return (a+b)
// }
// let sigFunc2 : (a:number,b:number,c:string)=> number;
// sigFunc2=(a:number,b:number,c:string)=>{
//     if(c==="add"){
//         return a+b
//     }else{
//         return a-b;
//     }
// }
//-------------------------------------------------------------
//class
class Player {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const sakib = new Player("sakib", 35, "bd");
const players = [];
sakib.play();
