// Importe de la librairie react
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BarreNavigation () {

    // Afin de changer la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Changer de langue
    const swapLanguage = () => {
        if (i18n.language === 'fr') {
        changeLanguage('en');
        } else {
        changeLanguage('fr');
        }
    };

    return ( 

        <Navbar expand="lg" className='p-4 shadow' sticky='top'>
            <Container className='flex-column w-100'>
                <Nav className=" pt-1" activeKey="/">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className='me-auto' />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <div className="col">
                            <Nav className="mx-auto">
                                <Navbar.Brand><Link to="/" className='mx-auto p-0 pe-3'><img src={logo} alt=''/></Link></Navbar.Brand>
                                <Link to="/" className='nav-link'>{t('nav_home').toUpperCase()}</Link>
                                
                                <NavDropdown title={t('nav_about').toUpperCase()} id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/equipe" className='dropdown-item'>{t('nav_about_team')}</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/about" className='dropdown-item'>{t('nav_about_physio')}</Link></NavDropdown.Item>
                                </NavDropdown>
                                
                                <Link to="/service" className='nav-link'>{t('nav_services').toUpperCase()}</Link>
                                <Link to="/exercice" className='nav-link'>{t('nav_exercices').toUpperCase()}</Link>
                                <Link to="/review" className='nav-link'>{t('nav_review').toUpperCase()}</Link>
                                <Link to="/contact" className='nav-link'>{t('nav_contact').toUpperCase()}</Link>                                
                            </Nav>
                        </div>

                        <div className='topNav col'>
                            <Nav.Item>
                                <Link to='/reservation' className='nav-link pb-0 pt-0'><button className='btn white rounded-4'>{t('nav_booking_btn')}</button></Link>
                            </Nav.Item>
                            <div className="vr"></div>
                            <NavDropdown title={t('nav_aide').toUpperCase()} id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/aide" className='dropdown-item'>{t('nav_faq')}</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/chatbot" className='dropdown-item'>{t('nav_chatbot')}</Link></NavDropdown.Item>
                            </NavDropdown>
                            <div className="vr"></div>
                            <Nav.Item className='ms-2'>
                                <button className='btn pb-0 pt-0'onClick={() => swapLanguage()}>{t('nav_lang')}</button>
                            </Nav.Item>
                        </div>
                    </Navbar.Collapse>   
                </Nav> 
            </Container>
        </Navbar>
    );
}
 
export default BarreNavigation;