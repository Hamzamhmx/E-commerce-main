
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"
import { FooterStyle } from "./componentStyle";


const Footer = () => {


    return (
        <>
            <FooterStyle>
                <div className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>
                        <div>
                            <Button>
                                <NavLink to={"/contact"}>Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* main footer  */}
                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Hamza store</h3>
                            <p>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                        </div>

                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="/">
                                <input type="email" placeholder="your e-mail" />
                                <input type="submit" value="subscribe" />
                            </form>
                        </div>

                        <div className="footer-social">
                            <h3>follows</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <FaDiscord className="icons" />
                                </div>
                                <div>
                                    <FaInstagram className="icons" />
                                </div>
                                <div>
                                    <a href="/">

                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h3>Call us</h3>
                            <a className="navbar-link" href="tel:+923000940728">+92 3000940728</a>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column">
                            <p>@{new Date().getFullYear()} Hamza Store All  rights reserved</p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERM &  CONDITIONS</p>

                            </div>

                        </div>
                    </div>
                </footer>

            </FooterStyle>
        </>
    )
}



export default Footer