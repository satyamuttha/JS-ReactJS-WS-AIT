class User {
    name:string = "raj";
    gender:string = "male";
    phone:number = 9999999999;

    // constructor(){}

    changeName(newName:string){
      this.name = newName
    }

    displayDetails(){
      console.log(this.name,this.gender, this.phone)
    }
}

   var user1  = new User()

   console.log(user1)

   user1.displayDetails()
   user1.changeName("Rohan")
   user1.displayDetails()

