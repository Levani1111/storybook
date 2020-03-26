import React, { Component } from "react";
import "./CheckBox.css";
import  checkbox from "../../img/checkboxblue.svg";

class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked:false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        !this.state.isChecked
            ? this.setState({isChecked: true})
            : this.setState({isChecked: false});
    };

    render(){
        if (this.props.default){
            return(
            <div className= "default-check" onMouseDown={this.handleClick}>
                {this.state.isChecked (
                    <div className="default-check-click">
                        <img className = "Check" src={checkbox}></img>
                    </div>
                ) : null}
            </div>
            );
            className="checkbox" > <img className="img" src={checkbox} /> </div>
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
