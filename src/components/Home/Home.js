import React from 'react';
import '../../assets/Styles/Styles.css';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import LandinPage from '../Landing/Landing';
import HomeBody from '../body/homeBody';
import { MDBContainer,MDBCol,MDBRow } from "mdbreact";
import LandingPage from '../Landing/Landing';


export default class Home extends React.Component {

    render() {
        return (
            <MDBContainer className="background" fluid>
               <LandingPage/>
                {/* <HomeBody /> */}

                <Footer />
            </MDBContainer>
        )
          
    }
}