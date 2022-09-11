import '../css/TestimonialSection.css';
import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import quotes from '../assets/bg-quotes.png';


const TestimonialSection = () => {
    return (
        <div className="testimonial_section">
            <img src={quotes} className='quote_icon' alt="quote icon" />
            <div className="testimonial">
                <p className="testimonial_body">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </p>
                <div className="testimonial_footer">
                    <img src={profile1} className="testimonial_image" alt="Satish Patel profile" />
                    <div className="testimonial_info">
                        <strong className="testimonial_name">Satish Patel</strong>
                        <span className="testimonial_title">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <p className="testimonial_body">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </p>
                <div className="testimonial_footer">
                    <img src={profile2} className="testimonial_image" alt="Bruce McKenzie profile" />
                    <div className="testimonial_info">
                        <strong className="testimonial_name">Bruce McKenzie</strong>
                        <span className="testimonial_title">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <p className="testimonial_body">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </p>
                <div className="testimonial_footer">
                    <img src={profile3} className="testimonial_image" alt="Iva Boyd profile" />
                    <div className="testimonial_info">
                        <strong className="testimonial_name">Iva Boyd</strong>
                        <span className="testimonial_title">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default TestimonialSection;