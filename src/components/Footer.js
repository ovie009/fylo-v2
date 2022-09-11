import '../css/Footer.css';
import logo from '../assets/logo.svg';
import location from '../assets/icon-location.svg';
import phone from '../assets/icon-phone.svg';
import email from '../assets/icon-email.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="email_section">
                <h3 className="email_heading">
                    Get early access today
                </h3>
                <p className="email_text">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                    questions, our support team would be happy to help you.
                </p>
                <input type="email" name="email" id="email" placeholder='email@example.com' />
                <button className='get_started footer_get_started' type='button'>Get Started for Free</button>
            </div>
            <div className="footer_wrapper">
                <img className='footer_logo' src={logo} alt="Fylo Logo" />
                <div className='details_wrapper'>
                    <div className="details">
                        <img src={location} alt="location icon" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam aperiam obcaecati voluptatem laudantium voluptate, odio libero explicabo quod.</p>
                    </div>

                    <div className="details">
                        <img src={phone} alt="phone icon" />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="details">
                        <img src={email} alt="email icon" />
                        <p>example"fylo.com</p>
                    </div>
                </div>
                <div className="links_wrapper">
                    <ul className="footer_list">
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="links_wrapper">
                    <ul className="footer_list">
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="socials_wrapper">
                    <div className="icon_wrapper">
                        <FaFacebookF className='social-icon'/>
                    </div>
                    <div className="icon_wrapper">
                        <FaTwitter />
                    </div>
                    <div className="icon_wrapper">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;