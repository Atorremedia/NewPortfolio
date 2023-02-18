import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';
import ScrollToTop from '../helpers/ScrollToTop';
import Blog from '../views/Blog';

function RoutesConfig(){
    return(
    <Router>

    <ScrollToTop />

        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path='/blog' element={ <Blog/> }/>
            <Route path="/projects" element={ <Projects/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/contact" element={ <Contact/> } />

        </Routes>

    </Router>

    )
}

export default RoutesConfig