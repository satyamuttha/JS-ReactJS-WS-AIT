 interface IFirst {
   name:string;

    display();
    changeName(newName)

 }

 class B implements IFirst {
name: string = "raj"
    display() {
       console.log(this.name) 
    }
    changeName(newName: any) {
        this.name = newName
    }
 }

 class C implements IFirst{
    name:string;
    constructor(){
        this.name = "raj"
    }
    display() {
        
    }

    changeName(newName: any) {
        
    }
 }

 interface IUser {
    name:string;
    gender:string;
    isMarried:boolean;
    id?:number
 }

 var user:IUser = {
name:"raj",
gender:"male",
isMarried:false,


 }