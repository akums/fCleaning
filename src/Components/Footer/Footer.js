
import './Footer.css';
import { BsFillTelephoneFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = ({ name })=>{
    let currentYear = new Date();
    let d = currentYear.getFullYear()

    return(<>

        <div className='allFooter'>

            <div className='Footer'>
            
                <article className="quick">

                    <ul>
                    <h3>Quick links</h3>
                        <li>
                            <NavLink to="/" className='futalinks'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className='futalinks'>About us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/deep-cleaning" className='futalinks'>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews" className='futalinks'>Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className='futalinks'>Contacts</NavLink>
                        </li>
                    </ul>

                </article>



                <article className="service">

                    <ul>
                    <h3>Service</h3>
                        <li>
                            <NavLink to='/standard-cleaning' className='futalinks'>
                                Standard Cleaning
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/carpet-cleaning' className='futalinks'> Carpet Cleaning</NavLink>
                        </li>

                        <li>
                            <NavLink to='/windows-cleaning' className='futalinks'>
                                Window Cleaning
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/commercial-cleaning" className='futalinks'>
                                Commercial Cleaning
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/airbnb-cleaning" className='futalinks'>
                                AirBnb Cleaning
                            </NavLink>
                        </li>

                    </ul>
                </article>                                                                                  



                <article className='ox'>
                    
                    <ul>
                    <h3>Contact Us</h3>
                        <li>
                            <a href="https://maps.google.com" className='futalinks' target='_blank' rel="noreferrer">
                                <MdLocationOn style={{'color': 'orangered'}}/>&nbsp;
                                22 St Michael's Road Aba, <br/> Abia State
                            </a>
                        </li>

                        <li>
                            <a href='tel: +2349016021512' className='futalinks'><BsFillTelephoneFill style={{'color': 'green'}}/>&nbsp; +2349016021512  </a> <a href="tel:+2349066995160" className='futalinks'>+2349066995160</a>
                        </li>

                        <li>
                            <a href="mailto:f_cleaningservices@yahoo.com" className='futalinks'>
                                <MdEmail style={{'color': 'brown'}}/>&nbsp; f_cleaningservices@yahoo.com
                            </a>
                        </li>

                        <li>
                            <a href="https://facebook.com" className='futalinks'>
                                <BsFacebook style={{'color': 'blue'}}/>&nbsp; Facebook
                            </a>
                        </li>

                        <li>
                            <a href="https://instagram.com" className='futalinks'>
                                <BsInstagram style={{'color': 'red'}}/>&nbsp; Instagram
                            </a>
                        </li>
                    </ul>
                </article>

            </div>

            <hr style={{
                'width': '80%',
                'border': '1px solid #ccc',
                'marginTop': '3rem'

            }}/>

            <div className='copywright'>
                Copywright &copy; {d} {name}. All rights reserved
            </div>

    </div>

       
    </>)
}


const mappStateToProps = state=>{
    return {
        name: state.app_name
    }
}

export default connect(mappStateToProps, null)(Footer);