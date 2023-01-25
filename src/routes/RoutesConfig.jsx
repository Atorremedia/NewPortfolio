import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';
import ScrollToTop from '../helpers/ScrollToTop';

function RoutesConfig(){
    return(
    <Router>
        {/* <Link to="/"></Link>
        <Link to="/home"></Link>
        <Link to={{pathname: "http://blog.augustolle.com"}}></Link>
        <Link to="/projects"></Link>
        <Link to="/about"></Link>
        <Link to="/contact"></Link> */}

    <ScrollToTop />

        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path='/blog' component={() => {
                window.location.href = 'http://blog.augustolle.com';
                return null;
            }}/>
            <Route path="/projects" element={ <Projects/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/contact" element={ <Contact/> } />

        </Routes>

    </Router>

    )
}

export default RoutesConfig