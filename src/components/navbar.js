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
                <nav>
                    <a onClick={() => navigate("/")}><i class="bi bi-house"></i> Home</a>
                    <a onClick={() => navigate("/portfolio")}><i class="bi bi-person-circle"></i> Portfolio</a>
                    <a onClick={()=> navigate("/contact")}><i class="bi bi-telephone"></i> Contact</a>
                    <a onClick={() => navigate("/hireMe")}><i class="bi bi-person-add"></i> Hire Me</a>
                </nav>
            </div>
        </div>
    )
}