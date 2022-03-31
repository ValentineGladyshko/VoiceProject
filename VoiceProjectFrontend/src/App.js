import { React, Component, useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Album from './pages/Album';
import NavigationBar from './pages/NavigationBar';
import FooterBar from './pages/FooterBar';
import headingBlocks from './json/headingBlocks.json';
import infoBlocks from './json/infoBlocks.json';
import thumbnailsCollection from './json/thumbnailsCollection.json';
import slides from './json/slides.json';
import slides1 from './json/slides1.json';
import navLinksUa from './json/ua/navLinks.json';
import navLinksRu from './json/ru/navLinks.json';
import navLinksEn from './json/en/navLinks.json';
import footerContent from './json/footerContent.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: navLinksUa,
            footerContent: footerContent,
            language: 'en'
        };
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange(language) {
        //const navigate = useNavigate();
        this.setState({ language });
        if (language === 'ru') {
            this.setState({ navLinks: navLinksRu });
            window.history.replaceState(null, "New Page Title", "/ru")
        }
        else if (language === 'en') {
            this.setState({ navLinks: navLinksEn });
            window.history.replaceState(null, "New Page Title", "/en")
        }
        else {
            this.setState({ navLinks: navLinksUa });
            window.history.replaceState(null, "New Page Title", "/ua")
        }
    }

    render() {
        return (<div className="App">
            <NavigationBar navLinks={this.state.navLinks} onLanguageChange={this.handleLanguageChange} />
            <Main />
            <FooterBar footerContent={this.state.footerContent} />
        </div>);
    }
}

const Main = () => (
    <Routes>
        <Route path='/' element={<Navigate to="/en" replace />}></Route>
        <Route path='/ua' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/ru' element={<Home slides={slides1} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/en' element={<Home slides={slides} headingBlocks={headingBlocks} infoBlocks={infoBlocks} />}></Route>
        <Route path='/ua/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
        <Route path='/ru/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
        <Route path='/en/album' element={<Album thumbnailsCollection={thumbnailsCollection} />}></Route>
    </Routes>
);

export default App;
