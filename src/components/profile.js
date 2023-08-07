import React from "react"
import { useNavigate } from "react-router-dom"
export default function Profile(props){
    const navigate = useNavigate()
    return (
        
        <>
            <div className="introduction">
                <div className="introduction--name">
                    <div className="welcome--site primary"><p>Hello there Welcome to my site</p></div>
                    <div className="brief--intro">
                        <h1 className="primary">I'm Ammar Siddiqui</h1>
                        <h1 className="secondary">An aspiring full-stack engineer</h1>
                        <p className="primary">
                            Welcome to my portfolio website! I'm a final-year student at FAST-NUCES Karachi, where I have been immersed in the world of computer science and engineering. I am driven by a passion for web and mobile app development. My journey has been focused on continuously honing my skills and becoming a proficient engineer. I am dedicated to learning and implementing good engineering practices and striving for clean and efficient code writing. As I embark on this exciting path, I am open to exploring part-time roles that will allow me to apply my knowledge and contribute to meaningful projects.
                        </p>
                        <p className="primary">
                        In the world of technology, I find my true calling, and my curiosity drives me to explore and experiment with the latest advancements. I firmly believe that every line of code I write presents an opportunity to improve and grow, and I take this responsibility seriously. I am always eager to learn from experienced professionals and collaborate with like-minded individuals to create innovative solutions. With a strong foundation in web and mobile app development, I am excited to take on new challenges and be part of projects that make a positive impact on the world. Thank you for visiting my portfolio, and I hope you enjoy exploring the projects I've worked on and the skills I'm constantly refining. Let's connect and create something amazing together!</p>

                    </div>
                    <div className="portfolio--buttons">
                        <div>
                            <button className="portfolio--button" id="hire--me" onClick={()=>navigate("/hireMe")}>Hire Me <i class="bi bi-person-add"></i></button>
                        </div>
                        <div>
                            <button className="portfolio--button" id = "view--portfolio" onClick={()=>navigate("/portfolio")}>View Portfolio <i class="bi bi-person-vcard"></i></button>
                        </div>
                        <div>
                            <button className="portfolio--button" id = "hire--me" onClick={()=>navigate("/contact")}>Contact <i class="bi bi-telephone"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-parent">
                        <img src = {props.profileImage} alt = "" className="profile-image"/>
                    </div>
                </div>
            </div>
            {/* <hr className="hr--profile"/> */}
            
        </>
    )
}
