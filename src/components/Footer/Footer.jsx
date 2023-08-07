import React from "react";
import './Footer.css'
import {useNavigate } from "react-router-dom";

export default function Footer (){
    const navigate = useNavigate()
    return (
        <>
            <div className="footer">
                <div className="footer--images">
                    eslint-disable-next-line
                    <a href="https://www.facebook.com/ammar.siddiqui.142">
                        <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook-new"/>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-ammar-siddiqui-09b519221/">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/ammar_siddiqui__/">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png" alt="instagram-new--v1"/>
                    </a>
                    <a href="https://github.com/siddiki002">
                        <img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" alt="github"/>
                    </a>
                    
                </div>
                <div className="footer--links">
                    <h5 onClick={() => navigate('/')}>Home</h5>
                    <h5 onClick={() => navigate('/portfolio')}>Portfolio</h5>
                    <h5 onClick={() => navigate('/contact')}>Contact</h5>
                    <h5 onClick={() => navigate('/hireMe')}>Hire Me</h5>
                </div>
                <div className="footer--copyrights">
                <img src="https://img.icons8.com/material-outlined/24/000000/copyright.png" alt="copyright"/>
                <span style={{
                    color:'rgb(90, 92, 94)',
                    }}>
                All rights reserved</span>
                </div>
            </div>
        </>
    )
}

