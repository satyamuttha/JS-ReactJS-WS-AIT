import {useState} from 'react'
import { IState } from './statetype'


function State() {
    // const [state,setState] = useState<string | number>("Kabir")

    //   const [state,setState] = useState<{username:string}>({username:"kabir"})

        const [state,setState] = useState<IState>({username:"kabir"})

    const changeUser = ()=>{
    //   setState(true)
     setState({username:"sagar"})
    }
  return (
    <div>
        <h2>{state.username}</h2>
        <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default State