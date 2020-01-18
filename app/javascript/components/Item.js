import React, { Component } from 'react'

const Item = (props) => {
    return (
        <div>
            <h2>Items</h2>
            <li className = "list-group-item text-capitalize d-flex justify-content-between my-2" >
              <h3>{props.title}</h3>
              <h3>{props.time}</h3>
              <h3>{props.location}</h3>
              <div className = "todo-icon">
                <button type = "submit" className = "btn btn-block btn-primary mt-1"> edit </button>
                <button type = "button" className = "btn btn-danger btn-block text-capitalize mt-1">delete</button>
              </div>
            </li>
        </div>
    );
}

export default Item
