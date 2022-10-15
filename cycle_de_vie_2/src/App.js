import React, { Component } from 'react'

export default class App extends Component {
  state = {
    dateCourante : new Date()
  };
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        dateCourante : new Date()
      })
    },1

    )

    
  }
  render() {
    return (
      <div>
        {this.state.dateCourante.getDate()}/{this.state.dateCourante.getMonth()}/{this.state.dateCourante.getFullYear()} -- {this.state.dateCourante.getHours()}:{this.state.dateCourante.getMinutes()}:{this.state.dateCourante.getSeconds()} -- {this.state.dateCourante.getMilliseconds()}
      </div>
    )
  }
}
