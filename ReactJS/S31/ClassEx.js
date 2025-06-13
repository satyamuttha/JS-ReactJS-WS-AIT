var User = /** @class */ (function () {
    function User() {
        this.name = "raj";
        this.gender = "male";
        this.phone = 9999999999;
    }
    User.prototype.changeName = function (newName) {
        this.name = newName;
    };
    User.prototype.displayDetails = function () {
        console.log(this.name, this.gender, this.phone);
    };
    return User;
}());
var user1 = new User();
console.log(user1);
user1.displayDetails();
user1.changeName("Rohan");
user1.displayDetails();
