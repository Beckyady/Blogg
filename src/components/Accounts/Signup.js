import React from 'react';
import '../../assets/Styles/Styles.css';
import FormValidator from '../Validator/FormValidator';
import axios from 'axios';
import toastr from 'toastr';
import env from "../../env";
import Navbar from "../navbar/Navbar";
import {  MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBContainer, MDBCard, MDBModalFooter, MDBIcon, MDBCardHeader,} from "mdbreact";




export default class SignUp extends React.Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.validator = new FormValidator([

            {
                field: 'username',
                method: 'isEmpty',
                validWhen: false,
                message: 'Username is required'
            },
            {
                field: 'username',
                method: 'matches',
                args: [/^[a-z0-9A-Z\s]*$/],
                validWhen: true,
                message: 'Username can only contain letters and numbers'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required'
            }
        ])

        this.state = {
            username:'',
            password:'',
            validation: this.validator.valid(),
            successmessage: '',
            errormessage: '',

        };
        this.submitted = false;
    }


    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSubmit = async (event) => {
        event.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {

            //handle actual form submission here

            try {
                const res = await axios.post(`${env.api}/users`, this.state);
                const token = res.data.data.token;

                localStorage.setItem('token', token);

                this.props.history.push('/create-post');
            } catch (err) {
                toastr.error(err.response);
                console.log('An Error Occured', err.response);
            }


        }
        else {
            toastr.options.positionClass = "toast-top-center";

            toastr.warning('Cannot Create User Make sure all fields are correctly filled');

        }
    };
    componentDidMount() {
        const token = localStorage.getItem('token');

        if (token) return this.props.history.push('/signup');
    }


    render() {
        let validation = this.submitted ?            // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation;
        return (

            <MDBContainer fluid >
            <Navbar />
    
    
            <div className=' logincontain '>
    
              <div className='bgoverlay'>
    
                <h2 className="err-success text-center">{this.state.errormessage}</h2>
                <h2 className="err-success text-center">{this.state.successmessage}</h2>
                <MDBContainer className="login">
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBCard>
                        <MDBCardBody>
                          <MDBCardHeader className="form-header morpheus-den-gradient rounded">
                            <h3 className="my-3">
                              <MDBIcon icon="lock" /> Create Account:
                             </h3>
                          </MDBCardHeader>
                          <div className="{validation.username.isInvalid && 'has-error'} mt-4">
                            <label htmlFor="defaultForUsername" className="grey-text font-weight-light"  >Your Username </label>
                            <input type="text" id="username" className="form-control" name='username' value={this.state.username} onChange={this.handleInputChange}
                            />
                            <span className="help-block">{validation.username.message}</span>
    
                          </div>
    
                          <div className="{validation.password.isInvalid && 'has-error'}">
                            <label htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light"> Your password </label>
    
                            <input type="password" id="password" className="form-control" name='password' value={this.state.password} onChange={this.handleInputChange} />
                            <span className="help-block">{validation.password.message}</span>
                          </div>
    
    
                          <div className="text-center mt-4">
                            <MDBBtn gradient="aqua" className="mb-3" type="submit" onClick={this.handleSubmit}>
                              Register
                            </MDBBtn>
                           
                          </div>
    
                          <MDBModalFooter>
                          <span style={{ paddingLeft: 15, color:"black" }}>Already have an account? <a className="btn btn-link" href="/login"> <button type="button" className="btn btn-dark" >
                                            LOGIN
                        </button></a></span>
                          </MDBModalFooter>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </div>
    
          </MDBContainer>
        )
    }
}