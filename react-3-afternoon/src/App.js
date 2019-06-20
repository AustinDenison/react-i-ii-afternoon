import React, {Component} from 'react';
import './App.css';
import UserData from './Components/UserData'
import Btn from './Components/Btn'
import Data from './Components/Data'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      i: 0
    }
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handlePrevious(){
    if(this.state.i <= 25 && this.state.i > 0){
      this.setState({i: this.state.i - 1}) 
    }
}

handleNext(){
    if(this.state.i >= 0 && this.state.i <= 25){
      this.setState({i: this.state.i + 1})
    }
}

  render(){
    return (
      <div className='body'>
        <div className='header-container'>
         <header>Home</header>
        </div>
       <div className="App">
         <div className='dataContainer'>
          <UserData i={this.state.i} className='userData'/>
         </div>
        <Btn handlePrevious={this.handlePrevious} handleNext={this.handleNext}/>
       </div>
      </div>
    );
  }
}

export default App;
