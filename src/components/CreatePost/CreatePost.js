import React from 'react';
import '../../assets/Styles/Styles.css';
import FormValidator from '../Validator/FormValidator';
import axios from 'axios';
import toastr from 'toastr';
import env from "../../env";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import { is } from '@babel/types';


export default class CreateBlog extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePostSubmit = this.handleFormSubmit.bind(this);


        this.validator = new FormValidator([

            {
                field: 'title',
                method: 'isEmpty',
                validWhen: false,
                message: 'Title is required'
            },
            {
                field: 'body',
                method: 'isEmpty',
                validWhen: false,
                message: 'Content is required'
            },

        ]);

        this.state = {
            title: '',
            body: '',
            author: '',
            image_url: '',
            likes: '',
            validation: this.validator.valid(),
            successmessage: '',
            errormessage: '',
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })

    }


    handleFormSubmit = async (event) => {
        event.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                    'auth-token': token
                };
                const { title, body, image_url } = this.state;
                const postData = {
                    title,
                    body,
                    image_url
                };
                console.log(postData)
                const res = await axios.post(`${env.api}/posts`, postData, { headers: headers });
                toastr.options.positionClass = "toast-top-center";

                if (res) {
                    setTimeout(() =>

                        toastr.success('New Post Successfully Created'), 1000)
                }
                this.props.history.push('/create-post');
               
                this.setState({ title: '',
                body: '',
                image_url: ''
            }) 
                

            } catch (err) {
                toastr.error('An Error Occured, try again or Add an image')

            }

        } else {
            toastr.options.positionClass = "toast-top-center"

            toastr.warning('Cannot Create Post Make sure all fields are correctly filled')

        }
    }

    uploadWidget(event) {
        const $this = this;
        event.preventDefault();
        window.cloudinary.openUploadWidget({ cloud_name: 'dxxm4ehaw', upload_preset: 'ruvxhuuh', tags: ['xmas'] },
            (error, result) => {
                console.log(result[0]);
                $this.setState({ image_url: result[0].url });
            });
    }
    render() {

        let validation = this.submitted ?            //if the form has been submitted at least once
            this.validator.validate(this.state) :    //then check validity every time we render
            this.state.validation
        return (
            <MDBContainer className="backgroundCP" fluid>

                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    <form>
                                        <p className="h4 text-center py-4">Create Post</p>

                                        <div >
                                            <MDBBtn color="amber" onClick={this.uploadWidget.bind(this)}> Click here to add image</MDBBtn>

                                        </div>

                                        <div className="{validation.title.isInvalid && 'has-error'}">
                                            <label htmlFor="title" className="grey-text font-weight-light mt-4" >
                                                Enter Your Title
                                            </label>
                                            <input name="title" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
                                            <span className="help-block">{validation.title.message}</span>
                                        </div>
                                        <br />

                                        <div className="{validation.body.isInvalid && 'has-error'}">
                                            <label htmlFor="content" className="grey-text font-weight-light">
                                                Type your Content
                                         </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon">
                                                        <i className="fas fa-pencil-alt prefix"></i>
                                                    </span>
                                                </div>
                                                <textarea  name='body' className="form-control" rows="25" onChange={this.handleInputChange} value={this.state.body}/>
                                            </div>
                                            <span className="help-block">{validation.body.message}</span>

                                        </div>

                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn className="btn btn-outline-purple" type="submit" onClick={this.handleFormSubmit}>
                                                Post
                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                            </MDBBtn>
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn outline color="danger" href="/login"> Cancel Post
                                        <MDBIcon fas icon="times" className="ml-2" />

                                            </MDBBtn>

                                        </div>
                                    </form>
                                </MDBCardBody>

                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
            
        )
    }
}






