import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import uuid from 'uuid'
class Home extends Component {
        state = {
            tasks: [
                {id: 1, title: "title", text: "text", time: "time", location: "location"},
                {id: 2, title: "title", text: "text", time: "time", location: "location"},
            ]
        }


    render(){
        return (
            <div className = "container">
              <div className = "row">
                <div className = "col-10 mx-auto col-md-8 mt-4">
                <h1 className = "text-capitalize text-center">My to do list</h1>
                <Input/>
                <List tasks = {this.state.tasks}/>
                </div>
              </div>
            </div>
        );
    }
}

export default Home