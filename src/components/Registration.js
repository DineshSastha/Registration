import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { validate } from  '../js/validation';


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


        this.json = {
            "rules": {
                "name": {
                    "required": true,
                    "minlength": 6
                },
                "email": {
                    "required": true,
                    "email": true
                },
                "password": {
                    "required": true,
                    "minlength": 8
                },
                "confirmPassword": {
                    "required": true,
                    "equalTo": "#password"
                },
                "phone": {
                    "required": true,
                    "maxlength": 10,
                    "digits": true
                },
                "gender": {
                    "required": true
                }
            },
            "messages": {
                "name": {
                    "required": "Please Enter the Name",
                    "rangelength": "Name Should contain Minimum of 5 Characters"
                },
                "email": {
                    "required": "Please Enter the Email ID",
                    "email": "Email Format is Wrong,For ex : abc@gmail.com"
                },
                "password": {
                    "required": "Please enter Password",
                    "minlength": "Password should contain minimum of 8 characters"
                },
                "confirmPassword": {
                    "required": "Please Enter Confirm Password",
                    "equalTo": "Please enter the same password as above"
                },
                "phone": {
                    "required": "Please enter Phone Number",
                    "maxlength": "Phone number should contain 10 characters",
                    "digits": "It Should be numbers"
                },
                "gender": {
                    "required": "Please Select your gender"
                }

            }
        }
    }

    // validate() {

    //     let rules = this.json.rules;
    //     let messages = this.json.messages;
    //     for (let rule in rules ){
    //         let html = document.getElementsByName(rule)[0];
    //         console.log(html);
    //         let value = html.value;
    //         console.log(value)
    //         for( let key in rules[rule] ){
    //             switch(key){
    //                 case "required" : {
    //                     // if(!checkRequired(value)){
    //                     // let message = messages[rule][key];
    //                     // }
    //                 }
    //             }
    //         }
    //     }
    // }





    checkPassword = () => {
        if (this.state.confirmPassword === this.state.password) {
            document.getElementById('cnfm-passwordError').innerHTML = "Great! Password Matched!!!";
            document.getElementById('cnfm-passwordError').style.color = "yellow";

        }
        else {
            document.getElementById('cnfm-passwordError').innerHTML = " **Confirm Password Field does not match the password!!!";
            document.getElementById('cnfm-passwordError').style.color = "red";
        }

    }


    submit = (json) => {
        // debugger;
        validate(json);
    }



    render() {
        return (
            <div>
                <div id="registration" className="container-fluid">
                    <h1 className="title">Registration</h1>
                    <hr />
                    <p className="alertTitle">Register here!!!</p>
                    <br />

                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Name :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <input id="name" className="inputBox" name="name" type="text" placeholder="Enter your name" autoFocus onChange={e => this.setState({ ...this.state, name: e.target.value })} />
                            <span id="nameError"></span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Email :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <input id="email" className="inputBox" type="email" name="email" placeholder="Enter your Email ID" onChange={e => this.setState({ ...this.state, email: e.target.value })} />
                            <span id="emailError"></span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Password :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <input id="password" className="inputBox" type='password' name="password" placeholder="Enter your Password" onChange={e => this.setState({ ...this.state, password: e.target.value })} />
                            <span id="passwordError"></span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Confirm Password :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <input id="confirmPassword" className="inputBox" name="confirmPassword" type="password" placeholder="Enter your Password again" onChange={e => this.setState({ ...this.state, confirmPassword: e.target.value })} onKeyUp={this.checkPassword} />
                            <span id="confirmPasswordError"></span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Phone Number :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <input id="phone" className="inputBox" minLength="10" maxLength="10" name="phone" type="text" placeholder="Enter your Phone number" onChange={e => this.setState({ ...this.state, phoneNo: e.target.value })} />
                            <span id="phoneError"></span>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-sm-6 fieldLabel">
                            <label>Gender :</label>
                        </div>
                        <div className="col-sm-6 fieldInput">
                            <select className='inputBox' id="gender" name="gender" onChange={e => this.setState({ ...this.state, gender: e.target.value })} >
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
                            <button className="submit" id="submit" onClick={() => this.submit(this.json)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Registration;


