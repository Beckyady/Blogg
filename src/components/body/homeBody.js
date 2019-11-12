import React from 'react';
import '../../assets/Styles/Styles.css';
import axios from 'axios';
import env from "../../env";
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import ReadMoreReact from 'read-more-react';



class HomeBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
            error: null,
        }
    }

    async getPosts() {

        const response = await axios.get(`${env.api}/posts`)
        try {

            this.setState({
                posts: response.data.data,
                loading: false,

            })

        }


        catch (error) { this.setState({ error, loading: false }) }
    }

    componentDidMount() {
        this.getPosts();
    }



    render() {
        const { loading, posts } = this.state;
        // let small = posts.splice(0, 3)
        return (
            <div>
                <hr className='hr' />

                <React.Fragment>

                    <MDBCard className="my-5 px-5 pb-5">
                        <MDBCardBody className=" ">
                            <h2 className="h1-responsive font-weight-bold  text-center my-5">
                                Recent posts
                                    </h2>
                            {!loading ? (this.state.posts.map(post => {

                                const { image_url, author, title, body, _id } = post;
                                return (
                                    <MDBRow key={_id}>
                                        <MDBCol lg="5" xl="4">
                                            <a href={"/posts/" + _id} target='_blank'>
                                                <img
                                                    className="img-fluid"
                                                    src={image_url} alt=""
                                                />
                                            </a>

                                        </MDBCol>
                                        <MDBCol lg="7" xl="8">
                                            <h3 className="font-weight-bold mb-3 p-0">
                                                <strong>{title}</strong>
                                            </h3>

                                            {/* <p>
                                                by <a href="#!" className="font-weight-bold">{_id}</a>
                                            </p> */}
                                            <Link to={"/posts/" + _id} target='_blank'>
                                                <MDBBtn color="primary" size="md">
                                                    Read Post
                                                  </MDBBtn>
                                            </Link>
                                            <hr className="my-5" />

                                        </MDBCol>
                                    </MDBRow>
                                )
                            })) : (
                                    <p>Loading</p>
                                )
                            }

                        </MDBCardBody>
                    </MDBCard>


                </React.Fragment>




            </div>
        );
    }
}

export default HomeBody

