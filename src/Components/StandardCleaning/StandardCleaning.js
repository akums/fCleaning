

import React from 'react';
import './StandardCleaning.css';
import foto from './stan.jpg';
import GeneralLandPage from '../GeneralLandPage/GeneralLandPage';
import ScheduleAppt from '../ScheduleAppt/ScheduleAppt';
import MainTitleDuty from '../MainTitleDuty/MainTitleDuty';
// import standImg from '../../media/pictures/two.jpg';
import bed from './bed.jpg';
import kich from './kich.jpg';


const StandardCleaning = ()=>{

    const link_to ='/contacts';
    const title = 'Standard Cleaning';

    return(<>
        <div className='StandardCleaning'>
            <GeneralLandPage foto={foto} />

            <MainTitleDuty title={title} />

            <div className='standard_contents'>

                <div className='num_one_content'>
                    <img src={kich} alt='Standard cleaning Duties' />

                    <span>
                        <h2 style={{'fontSize': '29px'}}>Kitchen</h2>
                        <ul>
                            
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Clean countertops
                            </li>
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Clean outside the oven
                            </li>
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Clean baseboards
                            </li>

                            <li>
                                <input type='checkbox' /> &nbsp;
                               Take out trash
                            </li>

                            <li>
                                <input type='checkbox' /> &nbsp;
                                Vacuum all floors
                            </li>
                            
                        </ul>
                    </span>
                </div>

               

                <div className='num_one_content'>

                    <span>
                        <h2 style={{'fontSize': '29px'}}>Bedroom</h2>
                        <ul>
                            
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Dust wipe all reachable surfaces
                            </li>
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Wipe mirrors and glass fixtures
                            </li>
                            <li>
                                <input type='checkbox' /> &nbsp;
                                Take out trash and recyclables
                            </li>

                            <li>
                                <input type='checkbox' /> &nbsp; 
                               Mop all floors
                            </li>

                            
                        </ul>
                    </span>

                            <img src={bed} alt='Standard cleaning Duties' />
                </div>

            </div>

            <ScheduleAppt link_to={link_to} />
        </div>
    </>)
}

export default StandardCleaning;