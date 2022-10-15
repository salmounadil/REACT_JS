import React, { Component } from 'react'
import './choix.css'
import Paper from './paper'
import Rock from './rock'
import Cissor from './cissor'



export default class Choix extends Component {

    render() {
        return (

            <div className="choix d-flex justify-content-center align-items-center">
                <div className="rond rond1 d-flex justify-content-center align-items-center">
                    <Paper pagee={this.props.page} diss={this.props.dis} exee={this.props.exe} />
                </div>
                <img src="./images/bg-triangle.svg" alt="" />
                <div className="rond rond2 d-flex justify-content-center align-items-center" >

                    <Cissor pagee={this.props.page} diss={this.props.dis} exee={this.props.exe} />
                </div>
                <div className="rond rond3 d-flex justify-content-center align-items-center">
                    <Rock pagee={this.props.page} diss={this.props.dis} exee={this.props.exe} />
                </div>
            </div>

        )
    }
}
