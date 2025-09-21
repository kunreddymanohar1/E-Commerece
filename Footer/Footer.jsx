import React from "react";
import log_big from "../Assets/Frontend_Assets/logo_big.png"
import insta from "../Assets/Frontend_Assets/instagram_icon.png";
import pintester from "../Assets/Frontend_Assets/pintester_icon.png";
import whatsup from "../Assets/Frontend_Assets/whatsapp_icon.png";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-i">
                <img src={log_big} alt="" />
                <h1>SHOPPER</h1>
            </div>
            <div className="link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className="footericons">
                 <img src={insta} alt="" />
                 <img src={pintester} alt="" />
                 <img src={whatsup} alt="" />
            </div>
            <hr />
            <div className="copyright">
           <p>Copyright @ 2024 -All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;