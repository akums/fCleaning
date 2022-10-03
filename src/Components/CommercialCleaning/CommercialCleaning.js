
import './CommercialCleaning.css';
import foto from './coma.jpg';
import GeneralLandPage from '../GeneralLandPage/GeneralLandPage';
import ScheduleAppt from '../ScheduleAppt/ScheduleAppt';
import MainTitleDuty from '../MainTitleDuty/MainTitleDuty';

const CommercialCleaning = ()=>{

    const title = 'Commercial Cleaning';
    const link_to = '/contacts';
    return(<>
        <div className='CommercialCleaning'>
            <GeneralLandPage foto={foto} />

            <MainTitleDuty title={title} />

            <div></div>

            <ScheduleAppt link_to={link_to} />
        </div>
    </>)
}

export default CommercialCleaning;