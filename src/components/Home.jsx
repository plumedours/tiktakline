import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../assets/logo.png';
import PlayText from '../assets/play-text.png';
import RulesText from '../assets/rules-text.png';
import AboutText from '../assets/about-text.png';
import ContactText from '../assets/contact-text.png';

import RulesModal from './RulesModal';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';

const Home = () => {
    const [showModalRules, setShowModalRules] = useState(false);
    const [showModalAbout, setShowModalAbout] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);

    const toggleModalRules = () => {
        setShowModalRules(!showModalRules);
    };

    const toggleModalAbout = () => {
        setShowModalAbout(!showModalAbout);
    };

    const toggleModalContact = () => {
        setShowModalContact(!showModalContact);
    };

    return (
        <div className='bg-my-green h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center h-full p-5'>
                <img src={Logo} alt='logo' className='w-96 mb-20' />
                <Link to="/game">
                    <img src={PlayText} alt='play' className='w-28 mb-8 hover:rotate-12 hover:scale-125 transition-all' />
                </Link>
                <div className='cursor-pointer' onClick={toggleModalRules}>
                    <img src={RulesText} alt='rules' className='w-28 mb-8 hover:-rotate-12 hover:scale-125 transition-all' />
                </div>
                <div className='cursor-pointer' onClick={toggleModalAbout}>
                    <img src={AboutText} alt='about' className='w-28 mb-8 hover:rotate-12 hover:scale-125 transition-all' />
                </div>
                <div className='cursor-pointer' onClick={toggleModalContact}>
                    <img src={ContactText} alt='contact' className='w-28 mb-8 hover:rotate-12 hover:scale-125 transition-all' />
                </div>
                {showModalContact && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <ContactModal closeModal={toggleModalContact} />
                    </div>
                )}
                {showModalAbout && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <AboutModal closeModal={toggleModalAbout} />
                    </div>
                )}
                {showModalRules && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <RulesModal closeModal={toggleModalRules} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;