import React from "react";
import Button from 'react-bootstrap/Button';
import FunctionalComponent from "./FuntionalComponent";
class ClassComponent extends React.Component{
    constructor() {
        super()
        this.state={
            "change":true
        }
    
    }
render(){

return(
    <div>
    <Button variant="primary" onClick={()=>(this.setState({change:!this.state.change}))}>change</Button>
        <div>Class component</div>
        {
            this.state.change?(<div>True</div>):(<div>False</div>)
        }
        <FunctionalComponent></FunctionalComponent>
        </div>
)
}
}
export default ClassComponent;