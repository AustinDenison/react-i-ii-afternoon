import React, {Component} from 'react'
import Data from './Data'

class UserData extends Component{

    render(){
        return(
            <div>
                <h1>{Data[this.props.i].name.first} {Data[this.props.i].name.last}</h1>
                <div className='info'>
                    <div>From: {Data[this.props.i].city}, {Data[this.props.i].country}</div>
                    <div>Job Title: {Data[this.props.i].title}</div>
                    <div>Employer: {Data[this.props.i].employer}</div>    
                </div>
                <div className='movies'>Favorite Movies: {Data[this.props.i].favoriteMovies}</div>
            </div>
        )
    }
}

export default UserData