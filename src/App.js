import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/profile'
import Navbar from './components/navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HireMe from './components/hireme'
import Portfolio from './components/portfolio'
import ContactMe from './components/contact'
import Footer from './components/Footer/Footer'
export default function App(){
    // const navigate = useNavigate()
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <Navbar />
                        <Profile
                            profileImage = {'./images/IMG_7078.jpg'}
                        />
                        <Footer />                        
                        </>

                    }/>
                    <Route exact path = '/hireMe' element={
                        <>
                            <Navbar />
                            <HireMe />
                            <Footer />                        
                        </>
                    }/>
                    <Route
                        exact path = '/portfolio'
                        element = {
                            <>
                                <Navbar />
                                <Portfolio />
                                <Footer />                        
                            </>
                        } 
                    />
                    <Route
                        exact path = '/contact'
                        element = {
                            <>
                                <Navbar />
                                <ContactMe />
                                <Footer />                        
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}