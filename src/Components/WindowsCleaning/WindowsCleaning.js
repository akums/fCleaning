
import './WindowsCleaning.css';
import foto from './wincleaning.jpg';
import GeneralLandPage from '../GeneralLandPage/GeneralLandPage';
import ScheduleAppt from '../ScheduleAppt/ScheduleAppt';


const WindowsCleaning = ()=>{
    const link_to ='/contacts';
    return (<>
        <div className="WindowsCleaning">
            <GeneralLandPage foto={foto} />

            <h1 className='ubuntu' style={{
                'fontSize': '30pt',
                'textAlign': 'center'
            }}>Windows Cleaning</h1>
            
            <div className='windows_role'>
                <ol className='olllll'>
                    <li>We scrub and scrub your windows to release buildup of grease.
                        dirt and airbone contminants.
                    </li>

                    <li>
                        The glass squeegee cleaned with professional grade equipment,
                        removing 99.9% of the water and dirt from the glass pores.
                    </li>

                    <li>
                        The edges and sills are clean and dry leaving nothing but sparkling
                        glass behind.
                    </li>
                </ol>
            </div>


        </div>

        <ScheduleAppt link_to={link_to} />
    </>)
}

export default WindowsCleaning;