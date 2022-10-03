
import './ModalForNavBar.css';
import { BiBrush, BiBasket } from 'react-icons/bi';
import { MdOutlineWindow, MdConstruction, MdFlaky } from 'react-icons/md';
import { GiRedCarpet } from 'react-icons/gi';
import { FaAirbnb } from 'react-icons/fa';
import { GiSpookyHouse } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const ModalForNavBar = ()=>{
    return (<>
        <section id="navModal">
            
            <article className='poiu'>

                    <div className='each'>
                        <NavLink to='/standard-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><BiBrush /></i> &nbsp; <span className='bold'>Standard Cleaning</span></span>
                            <p className='smalltext'>Wash and sanitize all corners and trash out recyclables
                            </p>
                        </NavLink>
                    </div>

                    <div className='each'>
                        <NavLink to='/deep-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><BiBasket /></i> &nbsp; <span className='bold'>Deep Cleaning</span></span>
                            <p className='smalltext'>Clean baseboards, wipe mirrors and glass fixtures
                            </p>
                        </NavLink>
                    </div>


                    <div className='each'>
                        <NavLink to='/airbnb-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><FaAirbnb /></i> &nbsp; <span className='bold'>AirBnb Cleaning</span></span>
                            <p className='smalltext'>Hosting on Airbnb can be an extremely rewarding experience with a score of benefits.
                            </p>
                        </NavLink>
                    </div>



                    <div className='each'>
                        <NavLink to='/commercial-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><MdFlaky /></i> &nbsp; <span className='bold'>Commercial Cleaning</span></span>
                            <p className='smalltext'>Typically, professional commercial cleaning will be able to clean all of the company's premises from front to back.
                            </p>
                        </NavLink>
                    </div>



            </article>











            <article className='poiu'>

                    <div className='each'>
                        <NavLink to='/windows-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><MdOutlineWindow /></i> &nbsp; <span className='bold'>Windows Cleaning</span></span>
                            <p className='smalltext'>Scrub and scrub your windows to release buildup of grease, dirt and airbone contaminants.
                            </p>
                        </NavLink>
                    </div>

                    <div className='each'>
                        <NavLink to='/post-construction' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><MdConstruction /></i> &nbsp; <span className='bold'>Post Construction</span></span>
                            <p className='smalltext'>After so much effort to build or renovate your home or office
                            </p>
                        </NavLink>
                    </div>


                    <div className='each'>
                        <NavLink to='/move-inout' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><GiSpookyHouse /></i> &nbsp; <span className='bold'>MoveIn oveOut</span></span>
                            <p className='smalltext'>Wash and sanitise your new location and take out trash quickly<br/>
                            </p>
                        </NavLink>
                    </div>



                    <div className='each'>
                        <NavLink to='/carpet-cleaning' className='none'>
                            <span style={{'display': 'flex'}}><i className='add'><GiRedCarpet /></i> &nbsp; <span className='bold'>Carpet Cleaning</span></span>
                            <p className='smalltext'>When it comes to maintaining your carpet, one of the most critical areas of focus is the traffic areas
                            </p>
                        </NavLink>
                    </div>



            </article>

            {/* <article className=''></article> */}

        </section>
    </>)
}

export default ModalForNavBar;