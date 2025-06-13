//any
var username;
username = 100;
username = "cjdks";
username = true;
//array of any type
var data = [100, "cdjk"];
//array of same type
var info = ["cdj", "cdj", "123", "hello"];
//object
var user;
user = { name: "", id: 101 };
//tuple
var userinfo;
userinfo = ["cdsj", 100];
//union
var emp;
emp = "hello";
emp = 100;
emp = true;
//literal
var pin;
pin = 123;
pin = 99;
//enum
var Direction;
(function (Direction) {
    Direction["Up"] = "bye";
    Direction["Down"] = "hello";
    Direction["Left"] = "hi";
    Direction["Right"] = "ok";
})(Direction || (Direction = {}));
var move;
move = Direction.Up;
move = Direction.Right;
console.log(move);
