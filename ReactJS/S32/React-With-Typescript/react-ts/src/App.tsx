
import './App.css'
import Profile from './components/profile/Profile'
import State from './components/state/State'
import Header from './components/header/Header'
function App() {


  return (
    <div>
      <h1>React JS With Typescript</h1>
      <Profile name={"sagar"} gender={"male"}  />
      <State />
      <Header />
    </div>
  )
}

export default App
