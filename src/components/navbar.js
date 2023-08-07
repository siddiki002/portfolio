import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar(){
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <div className='name'>
                    <div className='primary'>
                        Ammar
                    </div>
                    <div className='secondary'>
                        Siddiqui
                    </div>
                
            </div>
            <div className='list primary'>
                    
                    <h5 onClick={() => navigate("/")}><i class="bi bi-house"></i> Home</h5>
                    <span>
                    <h5 onClick={() => navigate("/portfolio")}><i class="bi bi-person-circle"></i> Portfolio</h5>

                    </span>
                    <h5 onClick={()=> navigate("/contact")}><i class="bi bi-telephone"></i> Contact</h5>
                    <h5 onClick={() => navigate("/hireMe")}><i class="bi bi-person-add"></i> Hire Me</h5>
                    
                
            </div>
        </div>
    )
}