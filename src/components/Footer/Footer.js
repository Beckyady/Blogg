import React from 'react';
import '../../assets/Styles/Styles.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import bloglogo from '../../assets/Images/bloglogo.png';

export default class Footer extends React.Component {

    render() {
        return (
          
            <div>
                <MDBFooter color="yellow darken-2" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBContainer className="footerText">
                            <MDBRow>
                                <MDBCol md="4">
                                    <h5 className="title"><strong>Express Yourself</strong></h5> 
                                    <strong>
                                        <p className="footerText">
                                            Write what you know, what you feel is right and what you know can change lives.
                    </p>
                                    </strong>
                                </MDBCol>
                                <MDBCol md="4">
                                    <h5 className="title"><strong>Navigation</strong></h5>
                                    <strong  >
                                        <p>
                                            <a style={{color: "black"}} href="/">Home</a> <br></br>

                                            <a style={{color: "black"}} href="/">Technology</a> <br></br>

                                            <a style={{color: "black"}} href="/">Health</a> <br></br>
                                            <a style={{color: "black"}} href="/">Science</a> <br></br>

                                            <a style={{color: "black"}} href="/">Agriculture</a> <br></br>
                                            <a style={{color: "black"}} href="/">Fashion</a> <br></br>

                                            <a style={{color: "black"}} href="/">Video</a> <br></br>
                                        </p>
                                    </strong>

                                </MDBCol>
                                
                                <MDBCol md="4">
                                    <h5 className="title"><strong>Contact Us</strong></h5>
                                    <strong>
                                        <p>
                                            For more Information, contact us
                                            +2347037991747,
                                            +2348084029291,
                                            +2347069441260,
                                            livrite.healthcare@gmail.com
                    </p>
                                    </strong>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Express Yourself. | ALL RIGHT RESERVED
                </MDBContainer>
                    </div>
                </MDBFooter>
            </div>


        )
    }
}
