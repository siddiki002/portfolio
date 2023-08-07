import {React,useRef,useState} from "react";
import emailjs from '@emailjs/browser'
import Modal, { ModalBody, ModalFooter } from "./popup/modal";
export default function ContactMe(){
    const form = useRef()
    const [emailSent , setEmailSent] = useState(false)
    const [formData, setFormData] = useState({
        from_name : "",
        message : "",
        from_email : ""
    })
    function handleSubmit(event){
        event.preventDefault()
        emailjs.init("f5_BE0FQNPgmhQtlS")
        
        emailjs.sendForm("service_eruyc6y" , "template_scveu9q" , form.current)
        .then(
            ()=>{
                setFormData({
                    from_name : "",
                    message : "",
                    from_email : ""
                })
                setEmailSent(!emailSent)
                
            }
        , 
            (err) => alert(JSON.stringify(err)))
    }
    function handleChange(event){
        const {name,value} = event.target

        setFormData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    return(
    <>
        <div className="contact--me">
            <div className="interests primary">
                <h1>Have something on mind? Feel free to approach</h1>
            </div>
            <div>
                <p>If you have an idea you want to bring to life or a collaboration you need. Let's discuss its possibility. Give me a follow on my socials</p>

            </div>
            <Modal
                show = {emailSent}
            >
                <ModalBody>
                    <h1>Email Sent</h1>
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => setEmailSent(!emailSent)}>Close</button>
                </ModalFooter>
            </Modal>
            <div className="socials">
                <a href="https://www.linkedin.com/in/muhammad-ammar-siddiqui-09b519221/" target="new">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"/>    
                </a>
                <a href="https://github.com/siddiki002">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="new"/>
                </a>
                <a href="https://www.facebook.com/ammar.siddiqui.142">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" target="new"/>
                </a>
            </div>
            <div>
                <h1>Or leave me an email</h1>
            </div>
            <div className="email--form" id="contact--form">
                <form onSubmit={handleSubmit} ref={form}>
                    
                        <label>Your Name</label>
                        <input placeholder="Name" name="from_name" value={formData.from_name} id="hireMe--input" onChange={handleChange}></input>
                        <label>Message</label>
                        <textarea placeholder="Message" name="message" value={formData.message} id="hireMe--textarea" onChange={handleChange}></textarea>
                        <label>Your email</label>
                        <input placeholder="Email" name="from_email" value={formData.from_email} id="hireMe--input" onChange={handleChange} type="email"></input>
                        <button id="hireMe--button">Send email</button>
                </form>
            </div>
        </div>
    </>
)
}