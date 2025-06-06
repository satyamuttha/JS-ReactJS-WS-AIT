var Student = /** @class */ (function () {
    function Student(name, gender, id) {
        this.name = name;
        this.gender = gender;
        this.id = id;
    }
    Student.prototype.displayDetails = function () {
        console.log(this.name, this.gender, this.id, Student.city);
    };
    Student.changeCity = function () {
        //    this.city = "Delhi"
        Student.city = "Indore";
    };
    Student.city = "Hyd";
    return Student;
}());
var student_1 = new Student("raj", "male", 101);
var student_2 = new Student("yash", "male", 102);
var student_3 = new Student("riya", "female", 103);
student_1.displayDetails();
console.log("--------------------------");
student_2.displayDetails();
console.log("--------------------------");
student_3.displayDetails();
console.log("--------------------------");
//  Student.city = "Pune"
Student.changeCity();
student_1.displayDetails();
console.log("--------------------------");
student_2.displayDetails();
console.log("--------------------------");
student_3.displayDetails();
console.log("--------------------------");
