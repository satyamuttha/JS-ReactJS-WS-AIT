var NewUser = /** @class */ (function () {
    function NewUser(name, gender, phone) {
        this.name = name;
        this.gender = gender;
        this.phone = phone;
    }
    NewUser.prototype.changeName = function (newName) {
        this.name = newName;
    };
    NewUser.prototype.displayDetails = function () {
        console.log(this.name, this.gender, this.phone);
    };
    return NewUser;
}());
var user1 = new NewUser("Vaishnavi", "female", 999999999);
var user2 = new NewUser("Nikhil", "male", 888888888);
//    console.log(user1)
user1.displayDetails();
//    user2.name = "Rohan"
//    user2.gender = "male"
user2.displayDetails();
