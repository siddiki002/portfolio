import {React , useState} from "react";

export default function About(){
    const [seeMore , setSeeMore] = useState(true)
    function toggle(){
        setSeeMore(prevValue => !prevValue)
    }
    return (
    <>
        <div className="aboutme">
            {seeMore ? <p>I am a final-year student at FAST-NUCES Karachi, passionate about web and mobile app development and dedicated to learning good engineering practices and writing clean code..<span onClick={toggle}>...See More</span>
            </p>
            :
            <p>
                I am a final-year student at FAST-NUCES Karachi, passionate about web and mobile app development and dedicated to learning good engineering practices and writing clean code. Open to part-time roles, I thrive in the world of technology, constantly seeking opportunities to grow and collaborate on innovative projects that make a positive impact. My portfolio showcases my journey and the skills I'm refining, inviting you to connect and create something amazing together. 
            </p>}
            
        </div>
    </>
    )
}