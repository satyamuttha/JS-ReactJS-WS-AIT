abstract class A {
    username:string = "rajiv"
  display(){
    console.log(this.username)
  }
   abstract changeUserName(newname)
    }

    class A1 extends A{

        changeUserName(newname) {
            this.username = newname
        }
    }

    class A2 extends A{
        changeUserName(newname: any) {
            console.log("previous name ",this.username);
            this.username = newname;
            console.log("New name ",this.username)
        }
    }
