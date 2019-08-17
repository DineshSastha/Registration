import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export  class Registration extends Component {

state={
name : '',
email : '',
password : '',
confirmPassword : '',
phoneNo : '',
gender : ''
};

validate(event){
        debugger;
        
        if(this.state.name === ""){
                document.getElementById('nameError').innerHTML = " **Name Field is Mandatory";
                return false;
        }
        else{
            document.getElementById('nameError').innerHTML = "";
        }
        if(this.state.email === ""){
            document.getElementById('emailError').innerHTML = " **Email ID Field is Mandatory";
            return false;
         }
         else{
            document.getElementById('emailError').innerHTML = "";
        }
        if(this.state.password === ""){
            document.getElementById('passwordError').innerHTML = " **Password Field is Mandatory";
            return false;
        }
        else{
            document.getElementById('passwordError').innerHTML = "";
        }
        if(this.state.confirmPassword === ""){
            document.getElementById('cnfm-passwordError').innerHTML = " **Confirm Password Field is Mandatory";
            return false;
        }
        else{
            document.getElementById('cnfm-passwordError').innerHTML = "";
        }
        if(this.state.confirmPassword !== this.state.password)
        {
            document.getElementById('cnfm-passwordError').innerHTML = "Password Matched";
            document.getElementById('cnfm-passwordError').style.color = "yellow";
            
        }
        else{
            document.getElementById('cnfm-passwordError').innerHTML = " **Confirm Password Field does not match the password";
            document.getElementById('cnfm-passwordError').style.color = "red";
        }
       

        if(this.state.phoneNo === ""){
            document.getElementById('phoneError').innerHTML = " **Phone Number Field is Mandatory";
            return false;
        }
        else{
            document.getElementById('phoneError').innerHTML = "";
        }
        if(isNaN(this.state.phoneNo)){
            document.getElementById('phoneError').innerHTML = " **Phone Number Field should be number";
        }
        if(this.state.gender === ""){
            document.getElementById('genderError').innerHTML = " **Gender Field is Mandatory";
            return false;
        }
        else{
            document.getElementById('genderError').innerHTML = "";
        }


        console.log(this.state);
        event.preventDefault();
    }


   



    render() {
        return (
            <div>
                <div id="registration" className="container-fluid">
                <h1 className="title">Registration</h1>
                <hr/>
                <p className="alertTitle">Register here!!!</p>
                <br/>
                <form onSubmit={this.validate}>
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Name :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <input id="name" className="inputBox" name="name" type="text" placeholder="Enter your name" value={this.state.name} onChange={e => this.setState({name:e.target.value})} required />
                <span id="nameError"></span>
                </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Email :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <input id="email" className="inputBox" type="email" pattern="[a-zA-Z0-9_\.-\S]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\S\.]{2,5}" name="email" placeholder="Enter your Email ID" value={this.state.email} onChange={e => this.setState({email:e.target.value})} required/>
                <span id="emailError"></span>
                </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Password :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <input id="password" className="inputBox" type='password' name="password" placeholder="Enter your Password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} required/>
                <span id="passwordError"></span>
                </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Confirm Password :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <input id="cnfm-password" className="inputBox" name="cnfm-password" type="password" placeholder="Enter your Password again" value={this.state.confirmPassword} onChange={e => this.setState({confirmPassword:e.target.value})} required/>
                <span id="cnfm-passwordError"></span>
                </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Phone Number :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <input id="phone" className="inputBox" pattern="[0-9]+"  maxLength="10" name="phone" type="text" placeholder="Enter your Phone number" value={this.state.phoneNo} onChange={e => this.setState({phoneNo:e.target.value})} required/>
                <span id="phoneError"></span>
                </div>
                </div>
                <br/>
                
                <div className="row">
                <div className="col-sm-6 fieldLabel">
                <label>Gender :</label>
                </div>
                <div className="col-sm-6 fieldInput">
                <select className='inputBox' id="gender" value={this.state.gender} onChange={e => this.setState({gender:e.target.value})} required>
                    <option unselectable="true">--Select your Age--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select> 
                <span id="genderError"></span>  
                </div>
                </div>
                <br/>
                <br/>
                <div className='row'>
                <div className="col-sm-12 submitBtn">
                <input className="submit" type="submit" id="submit" value="submit" />
                </div>
                </div>
                </form>
            </div>
            </div>

        )
    }
}


export default Registration;
 

