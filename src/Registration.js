import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export class Registration extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNo: '',
            gender: ''
        };

    }

    checkPassword =() =>{
        if (this.state.confirmPassword === this.state.password) {
            document.getElementById('cnfm-passwordError').innerHTML = "Great! Password Matched!!!";
            document.getElementById('cnfm-passwordError').style.color = "yellow";

        }
        else {
            document.getElementById('cnfm-passwordError').innerHTML = " **Confirm Password Field does not match the password!!!";
            document.getElementById('cnfm-passwordError').style.color = "red";
        }

    }


    validate = () =>{

        if (this.state.name === "") {
            document.getElementById('nameError').innerHTML = " **Name Field is Mandatory!!!";
            return false;
        }
        else {
            document.getElementById('nameError').innerHTML = "";
        }
        if (this.state.email === "") {
            document.getElementById('emailError').innerHTML = " **Email ID Field is Mandatory!!!";
            return false;
        }
        else {
            document.getElementById('emailError').innerHTML = "";
        }
        
        
        if(/[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]{2,5}/.test(this.state.email)){
            document.getElementById('emailError').innerHTML = "";
        }
        else{
            document.getElementById('emailError').innerHTML = " **Email ID Format is wrong!!! ";
        }
        if (this.state.password === "") {
            document.getElementById('passwordError').innerHTML = " **Password Field is Mandatory!!!";
            return false;
        }
        else {
            document.getElementById('passwordError').innerHTML = "";
        }
        if (this.state.confirmPassword === "") {
            document.getElementById('cnfm-passwordError').innerHTML = " **Confirm Password Field is Mandatory!!!";
            return false;
        }
        else {
            document.getElementById('cnfm-passwordError').innerHTML = "";
        }
       
        if (this.state.phoneNo === "") {
            document.getElementById('phoneError').innerHTML = " **Phone Number Field is Mandatory!!!";
            return false;
        }else if (isNaN(this.state.phoneNo)) {
            document.getElementById('phoneError').innerHTML = " **Phone Number Field should be number!!!";
        }
        else {
            document.getElementById('phoneError').innerHTML = "";
        }
        if(/^\d{10}$/.test(this.state.phoneNo)){
            document.getElementById('phoneError').innerHTML = "";
        }
        else{
            document.getElementById('phoneError').innerHTML = " **Phone Number format is wrong!!!";
            return true;
        }
        if (this.state.gender === "") {
            document.getElementById('genderError').innerHTML = " **Gender Field is Mandatory!!!";
            return false;
        }
        else {
            document.getElementById('genderError').innerHTML = "";
        }


        console.log(this.state);
    }






    render() {
        return (
            <div>
                <div id="registration" className="container-fluid">
                    <h1 className="title">Registration</h1>
                    <hr />
                    <p className="alertTitle">Register here!!!</p>
                    <br />
                    <form>
                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Name :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <input id="name" className="inputBox" name="name" type="text" placeholder="Enter your name" autoFocus  onChange={e => this.setState({ ...this.state,name: e.target.value })} />
                                <span id="nameError"></span>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Email :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <input id="email" className="inputBox" type="email" name="email" placeholder="Enter your Email ID"  onChange={e => this.setState({ ...this.state,email: e.target.value })} />
                                <span id="emailError"></span>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Password :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <input id="password" className="inputBox" type='password' name="password" placeholder="Enter your Password"  onChange={e => this.setState({ ...this.state,password: e.target.value })} />
                                <span id="passwordError"></span>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Confirm Password :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <input id="cnfm-password" className="inputBox" name="cnfm-password" type="password" placeholder="Enter your Password again"  onChange={e => this.setState({ ...this.state,confirmPassword: e.target.value })} onKeyUp={this.checkPassword} />
                                <span id="cnfm-passwordError"></span>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Phone Number :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <input id="phone" className="inputBox"  maxLength="10" name="phone" type="text" placeholder="Enter your Phone number"  onChange={e => this.setState({ ...this.state,phoneNo: e.target.value })} />
                                <span id="phoneError"></span>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-sm-6 fieldLabel">
                                <label>Gender :</label>
                            </div>
                            <div className="col-sm-6 fieldInput">
                                <select className='inputBox' id="gender"  onChange={e => this.setState({ ...this.state,gender: e.target.value })} >
                                    <option unselectable="true">--Select your Age--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span id="genderError"></span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='row'>
                            <div className="col-sm-12 submitBtn">
                                <button className="submit" id="submit" onClick={() => this.validate()}>Submit</button> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


export default Registration;


