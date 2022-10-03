
import './CarpetCleaning.css';
import GeneralLandPage from '../GeneralLandPage/GeneralLandPage';
import foto from './capetcapet.jpg';
import MainTitleDuty from '../MainTitleDuty/MainTitleDuty';
import ScheduleAppt from '../ScheduleAppt/ScheduleAppt';
import carepetImgDescription from '../../media/pictures/female.jpg';


const CarpetCleaning = ()=>{

    const title = 'Carpet Cleaning';
    const link_to = '/contacts';

    return(<>
        <div className='CarpetCleaning'>
            <GeneralLandPage foto={foto} />

            <MainTitleDuty title={title} />

            <div className='carpet_contents'>
                <p>
                    When it comes to maintaining your carpet, one of the most critical areas of focus is 
                    the traffic areas. If the dirts is not removed on a regular basis, these traffic areas
                    will begin to wear excessively. The dirt is extremely abrasive against the fibers of the 
                    carpetsas you work back abd forth on it.
                </p>
                
                <img alt='carepetImgDescription' src={carepetImgDescription} classname='cap_style' />
            </div>

            <ScheduleAppt link_to={link_to} />
        
        </div>
    </>)
}

export default CarpetCleaning;