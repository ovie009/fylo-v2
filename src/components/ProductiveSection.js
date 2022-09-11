import '../css/ProductiveSection.css';
import productive from '../assets/illustration-stay-productive.png';
import arrow from '../assets/icon-arrow.svg';

const ProductiveSection = () => {
    return (
        <div className="productive_section">
            <div className="productive-image">
                <img src={productive} alt="stay productive illustration" />
            </div>
            <div className="productive-text">
                <h3>Stay productive, wherever you are</h3>
                <p>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                    <br />
                    <br />
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                </p>
                <button type='button' className='fylo_works'>
                    <span>
                        See how Fylo works
                    </span>
                    <img src={arrow} alt="arrow icon" />
                </button>
            </div>
        </div>
    );
}
 
export default ProductiveSection;