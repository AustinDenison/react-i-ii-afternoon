import React, {Component} from 'react'

class Btn extends Component{

    render(){
        return(
            <div className='btnContainer'>
                <div className='prev'>
                    <button onClick={() => this.props.handlePrevious()}>Previous</button>
                </div>
                <div className='next'>
                    <button onClick={() => this.props.handleNext()}>Next</button>
                </div>
            </div>
        )
    }
}

export default Btn