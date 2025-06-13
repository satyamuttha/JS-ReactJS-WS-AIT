 class Emp {
    empName:string = "aish"
   //  private city:string = "mumbai"
   //  protected city:string = "mumbai"
    public city:string = "mumbai"

    displayCity(){
      console.log(this.city)
    }
 }

 var emp1 = new Emp()
//  console.log(emp1.city)

 class contacts extends Emp{
     email:string ;
     phone:number;

     display(){
      console.log(this.email,this.phone,this.city)
     }
 }