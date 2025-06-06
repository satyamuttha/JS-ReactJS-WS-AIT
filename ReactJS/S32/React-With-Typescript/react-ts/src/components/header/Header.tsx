 import { Component } from "react";

 class Header extends Component{
    state:{
        pName:string,
        price:number
    }
    constructor(props:any){
        super(props)
        this.state = {
            pName:"trimmer",
            price:9999
        }
    }

      render() {
           return <div>
              <h2>Header Component : {this.state.pName}</h2>
              <button>Submit</button>
           </div>
      }
 }

 export default Header