import React, { Component } from 'react'

class Input extends Component {
    render(){
        const {item, handleChange, handleSubmit} = this.props;
        return (
            <div className = "card card-body my-3">
                <h2>Input</h2>
                <form onSubmit = {handleSubmit}>
                    <div className = "input-group">
                      <div className = "input-group-prepend">
                        <div className = "input-group-text bg-primary text-white">
                            <i className = "fas fa-book"/>
                        </div>
                      </div>
                      <input
                        type = "Text"
                        className = "form-control text-capitalize"
                        placeholder = "add a todo item"
                        value = {item}
                        onChange = {handleChange}
                        />
                    </div>
                    
                    
                </form>
            </div>
        );
    }
}

export default Input