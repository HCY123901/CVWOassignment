import React, { Component } from 'react'
import Item from './Item'
class List extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const items = this.props.tasks.map((data)=>{
            return <Item key= {data.id} title={data.title} time={data.time} location={data.location}/>
        })
        return (
            <div>
                <h3 className = "text-captialize text-center">Existing items:</h3>
                <ul className = "list-group my-5">      
                <div>{items}</div>
                <button type = "button" className = "btn btn-danger btn-block text-capitalize mt-5">
                    Clear list
                </button>
                </ul>
            </div>
        );
    }
}

export default List