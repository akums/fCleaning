
import './Differentservices.css';
import { NavLink } from 'react-router-dom';
import standard from './standard.jpg';
import homecarpet from './homecarpet.jpg'
import homewin from './homewin2.jpg';
import postconst from './postconst.jpg';
import comcleaning from './comcleaning.jpg'

const Differentservices = ()=>{
    return(<>
        <div className='Differentservices'>

            

            <div className='diff_wrapper'>
                <NavLink to='services/standard-cleaning' className='diff_link'>
                    <div className='inheritance'>
                        <img src={standard} alt="differnt srevices" className='img_size' />

                        <span className='diff_txt'> 
                            <h3 className='ubuntu h_title'>Standard Cleaning</h3>

                            <p className='lil_cont'>
                                Wash and sanitise all corners and trash out recyclables.
                            </p>
                        </span>
                    </div>
                </NavLink>
            </div>



            <div className='diff_wrapper'>
                <NavLink to='services/carpet-cleaning' className='diff_link'>
                    <div className='inheritance'>
                        <img src={homecarpet} alt="differnt srevices" className='img_size' />

                        <span className='diff_txt'> 
                            <h3 className='ubuntu h_title'>Carpet Cleaning</h3>

                            <p className='lil_cont'>
                                When it comes to maintaining your carpet, one of the most
                                critical areas of focus is the traffic areas.
                            </p>
                        </span>
                    </div>
                </NavLink>
            </div>





            <div className='diff_wrapper'>
                <NavLink to='services/commercial-cleaning' className='diff_link'>
                    <div className='inheritance'>
                        <img src={comcleaning} alt="differnt srevices" className='img_size' />

                        <span className='diff_txt'> 
                            <h3 className='ubuntu h_title'>Commercial Cleaning</h3>

                            <p className='lil_cont'>
                                Typically, professional commercial cleaning will be able to clean 
                                all of the company's premises from front to back.
                            </p>
                        </span>
                    </div>
                </NavLink>
            </div>






            <div className='diff_wrapper'>
                <NavLink to='services/post-construction' className='diff_link'>
                    <div className='inheritance'>
                        <img src={postconst} alt="differnt srevices" className='img_size' />

                        <span className='diff_txt'> 
                            <h3 className='ubuntu h_title'>Post Construction</h3>

                            <p className='lil_cont'>
                            Let the experts at fCleaning service help you with all of
                            your construction clean-up cleaning needs
                            </p>
                        </span>
                    </div>
                </NavLink>
            </div>



            
            <div className='diff_wrapper'>
                <NavLink to='services/windows-cleaning' className='diff_link'>
                    <div className='inheritance'>
                        <img src={homewin} alt="differnt srevices" className='img_size' />

                        <span className='diff_txt'> 
                            <h3 className='ubuntu h_title'>Windows Cleaning</h3>

                            <p className='lil_cont'>
                            Scrub and scrub your windows to release build up of grease,
                            dirt and airbone contaminants.
                            </p>
                        </span>
                    </div>
                </NavLink>
            </div>




        </div>
    </>)
}

export default Differentservices;