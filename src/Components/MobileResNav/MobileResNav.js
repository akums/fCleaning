
import { useState, useMemo } from 'react';
import './MobileResNav.css';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { BiBrush, BiBasket } from 'react-icons/bi';
import { MdOutlineWindow, MdConstruction, MdFlaky } from 'react-icons/md';
import { GiRedCarpet } from 'react-icons/gi';
import { FaAirbnb } from 'react-icons/fa';
import { GiSpookyHouse } from 'react-icons/gi';


const MobileResNav = ()=>{

    const [toggler, setToggler] = useState(true);
    const handleHandler = ()=> setToggler(toggler=> !toggler);
    const keepTogglerNegative = useMemo(()=> setToggler(false), []);

    return (<>
        <div className="MobileResNav">
            <ol>
                <li 
                onClick={keepTogglerNegative}
                >
                    <NavLink to='/' className='core-nav'>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/about-us' className='core-nav'>
                        About
                    </NavLink>
                </li>

                <li >
                    <NavLink 
                    // to='/services' 
                    className='core-nav'>
                        <div style={{'display': 'flex'}} onClick={handleHandler}>
                            <span>Services</span> {!toggler ? <MdKeyboardArrowDown className='mobSize' style={{'fontSize': '22px', 'fontWeight': 'bold'}}/> : 
                            <MdKeyboardArrowUp className='mobSize' style={{'fontSize': '22px', 'fontWeight': 'bold'}}/>}
                        </div>
                    </NavLink>

                    { 
                        toggler 
                        ? 
                        <article>
                            <p><BiBrush className="blyu"/> 
                                <NavLink to="/standard-cleaning" className="mmm">
                                    &nbsp;Standard Cleaning
                                </NavLink>
                            </p>

                            <p><BiBasket className="blyu"/>
                                <NavLink to="/deep-cleaning" className="mmm">
                                &nbsp; Deep Cleaning
                                </NavLink>
                            </p>

                            <p><FaAirbnb className="blyu"/>
                                <NavLink to="/airbnb-cleaning" className="mmm">
                                    &nbsp; AirBnb Cleaning
                                </NavLink>
                            </p>

                            <p><MdFlaky className="blyu"/>
                                <NavLink to="/commercial-cleaning" className="mmm">
                                    &nbsp; Commercial Cleaning
                                </NavLink>
                            </p>

                            <p><MdOutlineWindow className="blyu"/>
                                <NavLink to="/windows-cleaning" className="mmm">
                                    &nbsp; Windows Cleaning
                                </NavLink>
                            </p>

                            <p><MdConstruction className="blyu"/>
                                <NavLink to="/post-construction" className="mmm">
                                    &nbsp; Post Construction
                                </NavLink>
                            </p>

                            <p><GiSpookyHouse className="blyu"/>
                                <NavLink to="/move-inout" className="mmm">
                                    &nbsp; MoveIn oveOu
                                </NavLink>
                            </p>

                            <p><GiRedCarpet className="blyu"/>
                                <NavLink to="/carpet-cleaning" className="mmm">
                                    &nbsp; Carpet Cleaning
                                </NavLink>
                            </p>

                        </article>

                        : 

                        null
                    }

                </li>

                <li>
                    <NavLink to='/reviews' className='core-nav'>
                        Reviews
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/contacts' className='core-nav'>
                        Contacts
                    </NavLink>
                </li>
            </ol>



            <div className='btnfila'>
                    <button className='greyBorder bt' style={{'border': '#1a73e8'}}>
                        <NavLink to="/contacts" className="mmm" style={{'fontWeight': 'bold', 'color': '#1a73e8'}}>Book a Demo</NavLink>
                    </button>

                    <button className='greyBorder bt' style={{'border': ''}}>
                        <NavLink to="/" className="mmm" style={{'fontWeight': 'bold', 'color': 'orangered'}}>Start a free trial</NavLink>
                    </button>
            </div>



        </div>
    </>)
}

export default MobileResNav;