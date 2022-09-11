import hero from "../assets/illustration-intro.png";
import '../css/HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero_section">
            <img src={hero} alt="hero illustration" />
        </div>
    );
}
 
export default HeroSection;