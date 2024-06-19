import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-teal-800 text-white flex justify-evenly p-14">
           <div className="">
           <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="col-span-1">
                        <h2 className="text-xl font-bold mb-2">MediCo</h2>
                        <p>Copyright © 2024 WEBCATCH Templates | All Rights Reserved</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Product</h3>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Case studies</li>
                            <li>Reviews</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Careers</li>
                            <li>Culture</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Support</h3>
                        <ul>
                            <li>Getting started</li>
                            <li>Help center</li>
                            <li>Server status</li>
                            <li>Report a bug</li>
                            <li>Chat support</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" aria-label="Facebook">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="YouTube">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           </div> 
            
        </footer>
    );
};

export default Footer;
