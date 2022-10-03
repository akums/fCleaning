
import './Reason.css';
import one from './reasonone.jpg';
import two from './reasontwo.jpg';



const Reason = ()=>{
    return(<>
        <div className='Reason'>

            <div className='combined-images'>
                {/* <p>ugfcrtfygbnuj</p> */}
                <img src={one} alt="asdfghjkl" className='joined_img one'/>
                
                <img src={two} alt="lkjhgfdsa" className='joined_img two'/>
            </div>


            <div className='duties'>
                <p className='underScore'>____&nbsp;&nbsp; About Us&nbsp;&nbsp; ____</p>

                <p className='why_will'>
                    Why will you choose 
                    <br />
                    our services?
                </p>

                <p className='summary'> 
                    Efficient, Friendly, Residential & Commercial Cleaners. Your
                    <br />
                    Satisfaction is Guaranteed
                 </p>


                 <div>
                    
                    <ul>
                        <li>
                            <input type='checkbox' checked={true} readOnly/>&nbsp;
                            Provide the finest Cleaning Supplies
                        </li>

                        <li>
                            <input type='checkbox' checked={true} readOnly/>&nbsp;
                            Professional Floor and Carpet Cleaning
                        </li>

                        <li>
                            <input type='checkbox' checked={true} readOnly/>&nbsp;
                            Seamless Communication
                        </li>

                        <li>
                            <input type='checkbox' checked={true} readOnly/>&nbsp;
                            Saves your time
                        </li>

                        <li>
                            <input type='checkbox' checked={true} readOnly/>&nbsp;
                            Easy to get <span style={{'color': 'orangered'}}>help</span>
                        </li>
                    </ul>
                 </div>
                 

            </div>

        </div>
    </>)
}

export default Reason;