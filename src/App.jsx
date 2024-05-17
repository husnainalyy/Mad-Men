import React,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero'
import MovingSection from './Components/MovingSection'
import About from './Components/About'
import EyeMove from './Components/EyeMove'
import Projects from './Components/Projects'
import Reviews from './Components/Reviews'
import Card from './Components/Card'
import ReadyStart from './Components/ReadyStart'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './Components/Loader'


function App() {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    
    return (
        
        <BrowserRouter>
            <div data-scroll-container className='  bg-zinc-900 text-white'> 
                <Loader/>
                <Navbar />
                <Hero />
                <MovingSection />
                <About />
                <EyeMove />
                <Projects />
                <Reviews />
                <Card />
                <ReadyStart />
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App