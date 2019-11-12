import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBIcon,
    MDBAnimation
} from "mdbreact";
import HomeBody from "../body/homeBody";
import '../../assets/Styles/Styles.css';
import woman from "../../assets/Images/woman.png"
import logo from "../../assets/Images/logo.png"




class LandingPage extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id="apppage">
                <Router>
                    <div>
                        <MDBNavbar
                        className="navbarColor"
                            color="yellow darken-2"
                            dark
                            expand="md"
                            fixed="top"
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                <a href="/"> <img src={logo} alt="Express Yourself" className="img-fluid expresslogo"/> </a>
                                    {/* <strong className="white-text">Express Yourself</strong> */}
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={this.state.collapsed} navbar>
                                    <MDBNavbarNav right>
                                        <MDBNavItem >
                                            <MDBNavLink to="/"><strong>Home</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/"><strong>Technology</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/"><strong>Health</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/"><strong>Science</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/"><strong>Agriculture</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="/"><strong>Fashion</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                        {/* <MDBAnimation type="bounceIn" duration="2s" infinite> </MDBAnimation> */}
                                            <MDBNavLink to="/"> <strong>Video</strong> </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <a href="/" className="nav-link Ripple-parent" target='_blank'><MDBIcon fab icon="twitter" /></a>

                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <a href="/" className="nav-link Ripple-parent" target='_blank'><MDBIcon fab icon="instagram" /></a>

                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {this.state.collapsed && overlay}
                    </div>
                </Router>
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol
                                    md="6"
                                    className="white-text text-center text-md-left mt-xl-5 mb-5" >
                                    <MDBAnimation type="fadeInLeft" delay=".3s">
                                        <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                            EXPRESS YOURSELF
                                        </h1>
                                        <hr className="hr-light" />
                                        <h4 className="mb-4">
                                            Write what you know, what you feel is right and what you know can change lives.

                                        </h4>
                                        <MDBBtn outline color="white"  href="/login">
                                            Create Post
                                             </MDBBtn>
                                    </MDBAnimation>
                                </MDBCol>

                                <MDBCol md="6" xl="5" className="mt-xl-5">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <img
                                            src={woman}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                           <HomeBody/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default LandingPage;






