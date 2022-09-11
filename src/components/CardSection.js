import '../css/CardSection.css';
import access from '../assets/icon-access-anywhere.svg';
import security from '../assets/icon-security.svg';
import collaboration from '../assets/icon-collaboration.svg';
import anyFile from '../assets/icon-any-file.svg';

const CardSection = () => {
    return (
        <div className="card_section">
            <div className="card_wrapper">

                <div className="card">
                    <img src={access} alt="access your files" className="card_image" />
                    <h3 className="card_heading">
                        Access your files, anywhere
                    </h3>
                    <p className="card_text">
                        The ability to use a smartphone, tablet, or computer to access your account meeans your files follow you everywhere.
                    </p>
                </div>

                <div className="card">
                    <img src={security} alt="security you can trust" className="card_image" />
                    <h3 className="card_heading">
                        Security you can trust
                    </h3>
                    <p className="card_text">
                        2-factor authentication and user-controlled encryption are jusrt a couple of the security faetures we allow to help secure your files.
                    </p>
                </div>
                
                <div className="card">
                    <img src={collaboration} alt="Real-time collaboration" className="card_image" />
                    <h3 className="card_heading">
                        Real-time collaboration
                    </h3>
                    <p className="card_text">
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                </div>
                
                <div className="card">
                    <img src={anyFile} alt="Store any type of file" className="card_image" />
                    <h3 className="card_heading">
                        Store any type of file
                    </h3>
                    <p className="card_text">
                        Whether you're sharing holidays photos or work docunments. Fylo has you covered allowing for all file types to be securely stored and shared
                    </p>
                </div>
                
            </div>
        </div>
    );
}
 
export default CardSection;