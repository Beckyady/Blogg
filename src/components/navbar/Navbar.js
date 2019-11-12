import React from 'react';
import logo from '../../assets/Images/logo.png';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon,  MDBAnimation } from "mdbreact";
import '../../assets/Styles/Styles.css';

export default class Navbar extends React.Component {
 
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      

    render() {
        return (
        
                <MDBNavbar color="yellow darken-2" dark="true" expand="md" fixed="top" >
        <MDBNavbarBrand>
        <strong style={{color:"black"}}>Express Yourself</strong>

        <a href="/"> <img src={logo} alt="Express Yourself" className="img-fluid expresslogo"/> </a>

        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          
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
              <MDBNavLink to="/"><strong>Video</strong></MDBNavLink>
            </MDBNavItem>             
            <MDBNavItem>
            <a href="http://twitter.com/livritehealth" className="nav-link Ripple-parent" target='_blank' rel="noopener  noreferrer"><MDBIcon fab icon="twitter"/></a>
             
            </MDBNavItem>
            <MDBNavItem>
            <a href="http://instagram.com/livritehealth" className="nav-link Ripple-parent" target='_blank' rel="noopener  noreferrer"><MDBIcon fab icon="instagram" /></a>
             
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
            
        );
    }
}




