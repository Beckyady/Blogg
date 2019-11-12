import React from 'react';
import '../../assets/Styles/Styles.css';
import axios from 'axios';
import env from "../../env";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import Navbar from '../navbar/Navbar';
import toastr from 'toastr';
import Footer from '../Footer/Footer';

export default class ShowPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            title: '',
            image_url: '',
            body: '',
            author: '',
            like: '',
            error: null
        }

        this.handleLike = this.handleLike.bind(this)
    }
    async handleLike(event) {
        const { like } = this.state
        let likepost = like
        event.preventDefault()
        const token = localStorage.getItem('token');
        const headers = {
            'auth-token': token
        };
        if (!token) {
            toastr.warning('You have to Login to like a post')
        }
        else {
            const response = await axios.post(`${env.api}/posts/${this.props.match.params.post_id}/like`, likepost, { headers: headers })

            try {

                this.setState({
                    like: response
                })

            } catch (error) {
                this.setState({ error })
            }

        }

    }
    async componentDidMount() {

        const getbyid = await axios.get(`${env.api}/posts/${this.props.match.params.post_id}`)
        // console.log(getbyid.data.data);

        try {

            this.setState({
                title: getbyid.data.data.title,
                image_url: getbyid.data.data.image_url,
                body: getbyid.data.data.body,
                loading: false

            })
        } catch (error) { this.setState({ error, loading: false }) }
    }

    render() {
        const { loading, title, image_url, body, } = this.state;
        return (
            <div className="background">
                <MDBRow><MDBCol size="12" sm="6" lg="12">  <Navbar /></MDBCol></MDBRow>

                <MDBContainer>
                    <React.Fragment >
                        <MDBContainer className="showpostcontainer ">
                            <div className='row'>
                                <div className='col-sm-10'>
                                    <div className='showposttitle'> <h2>{title}</h2> </div>
                                    <div className='showpostimg'> <img src={image_url} className='img-fluid xlimg' /></div>
                                    <div className='showpostbody'><p>{body}</p></div>
                                    <div className='likeicon'><i className="fa fa-fw fa-thumbs-up " area-hidden='true' onClick={this.handleLike}></i></div>
                                </div>
                                <div className='col-sm-2'></div>
                            </div>
                        </MDBContainer>

                    </React.Fragment>
                </MDBContainer>
                <Footer />
            </div>


        );
    }
}