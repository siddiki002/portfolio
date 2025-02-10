import {React , useRef , useState} from "react";
import emailjs from '@emailjs/browser'
import Modal, { ModalBody, ModalFooter } from "./popup/modal";
export default function HireMe(){
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
    // const file = fetch('https://drive.google.com/drive/u/0/folders/1xMRuMfw7af2aoSlAEqm0iJRlYSnrKFiJ')
    // .then((res)=> {console.log(res)})
    return (
        <>
            <div className="hire--quote primary">
                <h2>"Hire for passion and intensity; there is training for everything."</h2>
                <p>Nolan Bushnell (Cofounder, Atari Inc.)</p>
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
            <div className="hireme--box">
                <div className="cv--box">
                    <a href='./files/Ammar_Siddiqui.pdf' target="blank" download='Ammar Siddiqui.pdf'>
                        <button className="cv--button">Download CV</button>    
                    </a>
                </div>
                <div className="email--form">
                <form onSubmit={handleSubmit} ref={form}>
                    
                    <label>Your Name</label>
                    <input placeholder="Name" name="from_name" value={formData.from_name} onChange={handleChange} id="hireMe--input"></input>
                    <label>Message</label>
                    <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} id="hireMe--textarea"></textarea>
                    <label>Your email</label>
                    <input placeholder="Email" name="from_email" value={formData.from_email} onChange={handleChange} id="hireMe--input" type="email"></input>
                    <button id="hireMe--button">Send email</button>
                </form>
                </div>

            </div>
        </>
    )
}