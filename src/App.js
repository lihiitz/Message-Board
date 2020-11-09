import './App.css';
import { Component } from 'react';
import Login from './components/Login';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      uploadScreen : ""
    }
  }
  
  showLoginPage () {
    let uploadScreen = <Login key={"loginScreen"} appContext = {this}/>
    this.setState ( {
      uploadScreen
    })
  }
  componentWillMount () {
    this.showLoginPage()
  }
  render () {
    return (
      <div className = "App">
        {this.state.uploadScreen}
      </div>
    )
  }
}

const style = {
  margin : 15
}

export default App