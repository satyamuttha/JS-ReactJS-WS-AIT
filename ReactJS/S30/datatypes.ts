//any
var username : any ;
username = 100
username = "cjdks"
username = true

//array of any type
var data : any[] = [100,"cdjk"]
//array of same type
var info:string[] = ["cdj","cdj","123","hello"]

//object
var user:{name:string,id:number,gender?:string};
user = {name:"",id:101}

//tuple
var userinfo:[string,number] ; 
userinfo = ["cdsj",100]

//union
var emp : string | number | boolean ;

emp = "hello"
emp = 100 
emp = true

//literal
let pin : 123 | 99;
pin = 123
pin = 99 

//enum

enum Direction {
    Up="bye",
    Down="hello" ,
    Left = "hi" ,
    Right ="ok" 
}

let move : Direction;

move = Direction.Up 
move = Direction.Right

console.log(move)