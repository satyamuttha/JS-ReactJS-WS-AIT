class Product {
    category:string;
    companyName;string;

    constructor(category,companyName){
        this.category = category;
        this.companyName = companyName
    }

    changeCategory(newCategory){
this.category = newCategory;
 this.displayDetails()
    }

    displayDetails(){
        console.log(this.category,this.companyName)
    }
}

class Iphone extends Product {
    model:string;
   constructor(model){
    super("electronics","Apple")
    this.model = model
    
   }

    display(){
        console.log(this.model,this.category,this.companyName)
    }
}


   var child_1 = new Iphone("Iphone 16")

   child_1.displayDetails()
   child_1.display()
  child_1.changeCategory("Elec")


  class MyProduct extends Iphone{
    
  }