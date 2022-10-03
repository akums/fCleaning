
import './AirBnb.css';
import foto from './air.jpg';
import GeneralLandPage from '../GeneralLandPage/GeneralLandPage';
import MainTitleDuty from '../MainTitleDuty/MainTitleDuty';
import ScheduleAppt from '../ScheduleAppt/ScheduleAppt';

const AirBnb = ()=>{

    const title = 'AirBnb Cleaning';
    const link_to = 'contacts';

    return(<>
        <div className='AirBnb'>

            <GeneralLandPage foto={foto} />

            <MainTitleDuty title={title} />

            <p className='pre_air cntr'>
                AirBnb cleaning and guest preparation program
            </p>

            <div className='air_manual'>   

                <div className='divvv'>
                    <h3>Robust Cleaning</h3>
                    <p>Your listing free of clutter, dirt and debris. Make sure the floors in the 
                        bedrooms, bathrooms and common areas are vaccumed and mopped. The battroom sanitised with special 
                        attention paid to removal of hair from sink, toilet and shower and floor. Any opened food orbeverages from 
                        prior guests will be remmoved from  the fridge.
                    </p>
                </div>
                

                <div className='divvv'>
                    <h3>Fresh Linens</h3>
                    <p>
                        Guests will spend the majority of their stay in your listing sleeping, so it's very,
                        important that they feel comfortable. Preparation should include freshly wasged sheeys, pillow cases 
                        and towels.
                    </p>
                </div>

            </div>

            <ScheduleAppt link_to={link_to} />

        </div>
    </>)
}

export default AirBnb;