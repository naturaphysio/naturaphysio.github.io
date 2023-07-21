// Importe de la librairie react
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import { useTranslation } from 'react-i18next';

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
                                <Navbar.Brand href="/" className='mx-auto p-0 pe-3'><img src={logo} alt=''/></Navbar.Brand>
                                <Nav.Link href="/">{t('nav_home').toUpperCase()}</Nav.Link>
                                
                                <NavDropdown title={t('nav_about').toUpperCase()} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/equipe">{t('nav_about_team')}</NavDropdown.Item>
                                    <NavDropdown.Item href="/about">{t('nav_about_physio')}</NavDropdown.Item>
                                </NavDropdown>
                                
                                <Nav.Link href="/service">{t('nav_services').toUpperCase()}</Nav.Link>
                                <Nav.Link href="/exercice">{t('nav_exercices').toUpperCase()}</Nav.Link>
                                <Nav.Link href="/review">{t('nav_review').toUpperCase()}</Nav.Link>
                                <Nav.Link href="/contact">{t('nav_contact').toUpperCase()}</Nav.Link>                                
                            </Nav>
                        </div>

                        <div className='topNav col'>
                            <Nav.Item>
                                <Nav.Link href='/reservation' className='pb-0 pt-0'><button className='btn white rounded-4'>{t('nav_booking_btn')}</button></Nav.Link>
                            </Nav.Item>
                            <div className="vr"></div>
                            <NavDropdown title={t('nav_aide').toUpperCase()} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/aide">{t('nav_faq')}</NavDropdown.Item>
                                <NavDropdown.Item href="/chatbot">{t('nav_chatbot')}</NavDropdown.Item>
                            </NavDropdown>
                            <div className="vr"></div>
                            <Nav.Item>
                                <button className='pb-0 pt-0'onClick={() => swapLanguage()}>{t('nav_lang')}</button>
                            </Nav.Item>
                        </div>
                    </Navbar.Collapse>   
                </Nav> 
            </Container>
        </Navbar>
    );
}
 
export default BarreNavigation;