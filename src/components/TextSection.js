import '../css/TextSection.css';
import mobileCurvyBorder from '../assets/bg-curvy-mobile.svg'

const TextSection = () => {
    return (
        <div className="text_section">
            <img src={mobileCurvyBorder} alt="curvy boarder" className='curvy_border' />
            <div className="text_wrapper">
                <h1>
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p>
                    Fylo stores all your most important files in one seure location. Access them wherever you need, share and collaborate with friends faily, and co-workers.
                </p>
                <button type='button' className="get_started">
                    Get Started
                </button>
            </div>
        </div>
    );
}
 
export default TextSection;