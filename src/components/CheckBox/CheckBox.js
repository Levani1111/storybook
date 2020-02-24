import React, { Component } from "react";
import "./CheckBox.css";
import  checkbox from "../../img/checkboxblue.svg";

class CheckBox extends Component{
    constructor(props){
        super(props)
        this.state ={
            isonclick:true
        }
    }
    box = ()=>{
        if (this.state.isonclick === true){
            this.setState({isonclick:false})
        } else {
            this.setState({isonclick:true})
        }
    }
    render(){
        if (this.state.isonclick == true){
            return(
            <div onClick={this.box} className="checkbox" > <img className="img" src={checkbox}/> </div>
        )
        }

        if (this.state.isonclick == false){
            return(
                <div onClick={this.box} className="checkbox" >  </div>
            )
        }
        
    }
}


export default CheckBox;
