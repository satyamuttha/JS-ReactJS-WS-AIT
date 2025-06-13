class NewUser {
    name:string 
    gender:string 
    phone:number 

    constructor(name,gender,phone){
        this.name=name;
        this.gender = gender;
        this.phone = phone;
    }


    changeName(newName:string){
      this.name = newName
    }

    displayDetails(){
      console.log(this.name,this.gender, this.phone)
    }
}

   var user1   =  new NewUser("Vaishnavi","female",999999999)
   var user2 = new NewUser("Nikhil","male",888888888)

//    console.log(user1)

   user1.displayDetails()

//    user2.name = "Rohan"
//    user2.gender = "male"

   user2.displayDetails()