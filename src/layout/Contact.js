import './contact.scss';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneOutboundFill} from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Contact = () => {
    return <div className="contact-outer-container" id="contact-section">
        <p className="headline">Contact</p>
        <div className="projects-container">
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <p className='contact-label-text'><span><MdEmail/></span> <span className='contact-text'>
                <a href="mailto:mail.soumitri@gmail.com">mail.soumitri@gmail.com</a>
            </span></p>
            <p className='contact-label-text'><span><BsTelephoneOutboundFill/></span>  <span className='contact-text'>
                <a href="tel:+919038736940">+919038736940</a>
            </span></p>
            {/* <p className='contact-label-text'><span><IoLocationSharp/></span>Location - <span className='contact-text'>
                Currently in West Bengal, India
            </span></p> */}
            <h1 className='contact-label-text'>Thank You for visiting!</h1>
            </IconContext.Provider>
        </div>

    </div>
}

export default Contact;