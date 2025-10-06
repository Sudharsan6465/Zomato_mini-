import { Component } from "react"

class Name extends Component
{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <h1 color="red"  align="center ">Hi , I am {this.props.name}</h1>
        </div>

        )
        
    }
}

export default Name;
