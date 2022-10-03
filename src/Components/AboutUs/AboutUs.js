
import React from 'react';
import './AboutUs.css';
import { connect } from 'react-redux';
import familyPix from '../../media/pictures/female.jpg';
import famowned from './famowned.jpg';
import conven from './conven.jpg';
import expeckt from './expeckt.jpg';
import maincommit from './maincommit.jpg';

const AboutUs = (props)=>{

    // useEffect(()=> document.title = "About US || fCleaning", []);

    return(<>
        <div className="about_us">

            <div className='about_landing_container'>
                {/* <h1 className='cntr ubuntu abt_h1 orange' style={{'marginTop': '4cm', 'fontSize': '46px'}}>About Us</h1> */}
            </div>
            
            <div className='about_pikin'>

                <article className='text_and_imgg'>
                    <img src={famowned} alt='family' className='for_family_pix' />
                    
                    <div>
                        <h2 className="ubuntu bue hhh">Family Owned</h2>
                        <p className='write_up'>
                            fCleaning was started in 2020 as a way to provide a warm and friendly cleaning services for
                            rsidents who  needed some relief from daily grid of house cleaning.
                            We are committed in providing customer service nd customer satisfaction and we hope we can be of service!
                        </p>
                    </div>
                </article>



                <article className='text_and_imgg revas'>
                    
                    <div>
                        <h2 className="ubuntu orange hhh">Commitment to client</h2>
                        <p className='write_up'>
                            Client satisfaction is our number one priority. If there is any part of your service that leaves you less than
                            100% satisfied, please let us know so we can make good on our commitment. You can call, email or let our team members know.
                            We make it easy for you to share your experience with us directly. 
                        </p>
                    </div>

                    <img src={maincommit} alt='family' className='for_family_pix' />
                </article>


                <article className='text_and_imgg'>
                    <img src={expeckt} alt='family' className='for_family_pix' />
                    
                    <div>
                        <h2 className="ubuntu bue hhh">What to expect</h2>
                        <p className='write_up'>
                            We perform an initial walk-through before we begin cleaning to ensure that your specific needs are 
                            met . Then we can clean, clean, clean! After the cleaning is complete, our team members will do a final walk-through with you
                            to scrutinise your satisfaction.
                        </p>
                    </div>
                </article>



                 <article className='text_and_imgg revas'>
                    
                    <span>
                        <h2 className="ubuntu orange hhh">Easy and convenient</h2>
                        <p className='write_up'>
                           Scheduling an appointment is easy. There are few easy ways you can schedule an appointment. You can give
                           us a call, book an appointment on line, or even email us. However you chose to schedule, you can, so focus
                           on other important things.
                        </p>
                    </span>

                    <img src={conven} alt='family' className='for_family_pix' />
                </article>

            </div>

            <h1 className="ubuntu cntr our_team bue">Our Team</h1>
            <hr style={{
                'width': '5%',
                'marginTop': '0.9cm',
                'marginBottom': '10px'
            }}/>

            
            <div>
                <section className='c_t_o'>

                    <div className='set_size'>
                        <img src={familyPix} alt='share_holders' className='presido' />

                        <p className='ubuntu nameofowners'>CEO - Prince</p>
                    </div>

                    <div className='set_size'>
                        <img src={familyPix} alt='share_holders' className='presido' />

                        <p className='ubuntu nameofowners'>Manager - Mike</p>
                    </div>

                    <div className='set_size'>
                        <img src={familyPix} alt='share_holders' className='presido' />

                        <p className='ubuntu nameofowners'>Manager - Joy</p>
                    </div>

                </section>
            </div>


        </div>
    </>)
}

const mapStateToProps = state =>{
    return {
        name: state.name,
        app_name: state.app_name
    }
}

const dispatchToProps = dispatch =>{
    return {
        swap: ()=> dispatch({ type: 'swapName', new_name: 'Ugo Akuma '})
    }
}

export default connect(mapStateToProps, dispatchToProps)(AboutUs);