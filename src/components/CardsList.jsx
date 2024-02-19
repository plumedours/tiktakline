import { useState } from 'react';

import cards from './Cards';
import Navbar from './Navbar';
import RulesModal from './RulesModal';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';
import ContributeModal from './ContributeModal';

const CardsList = () => {
    const [showModalRules, setShowModalRules] = useState(false);
    const [showModalAbout, setShowModalAbout] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [showModalContribute, setShowModalContribute] = useState(false);

    const groupedCards = cards.reduce((acc, card) => {
        if (!acc[card.theme]) {
            acc[card.theme] = [];
        }
        acc[card.theme].push(card);
        return acc;
    }, {});

    Object.values(groupedCards).forEach(themeCards => {
        themeCards.sort((a, b) => a.year - b.year);
    });

    const toggleModalRules = () => {
        setShowModalRules(!showModalRules);
    };

    const toggleModalAbout = () => {
        setShowModalAbout(!showModalAbout);
    };

    const toggleModalContact = () => {
        setShowModalContact(!showModalContact);
    };

    const toggleModalContribute = () => {
        setShowModalContribute(!showModalContribute);
    };

    return (
        <div>
            <Navbar openModalRules={toggleModalRules} openModalAbout={toggleModalAbout} openModalContact={toggleModalContact} />
            <div className='flex flex-col justify-center items-center bg-my-green min-h-screen'>
                <div className='flex flex-col mt-2 items-center max-w-screen-lg w-11/12'>
                    <div className='w-full flex justify-center'>
                        <button className='bg-my-orange hover:bg-my-yellow transition-all text-md rounded-md px-2 py-1 self-center text-center font-bold text-white mb-5' onClick={toggleModalContribute}>Vous souhaitez contribuer ?</button>
                    </div>
                    {Object.entries(groupedCards).map(([theme, themeCards]) => (
                        <div key={theme} className="mb-8 w-full">
                            <h2 className="bg-my-blue-dark w-full text-xl rounded-md px-2 py-1 self-center text-center font-bold text-white mb-5">{theme}</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {themeCards.map((card, index) => (
                                    <div key={index} className="max-w-xs sm:max-w-sm lg:max-w-md overflow-hidden rounded-lg shadow-lg bg-white">
                                        <img src={card.img} alt={card.item} className="w-full" />
                                        <div className="px-4 py-2">
                                            <div className="font-bold text-xl mb-1">{card.item}</div>
                                            <p className="text-gray-700 text-base">{card.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModalRules && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <RulesModal closeModal={toggleModalRules} />
                </div>
            )}
            {showModalAbout && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <AboutModal closeModal={toggleModalAbout} />
                </div>
            )}
            {showModalContact && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <ContactModal closeModal={toggleModalContact} />
                </div>
            )}
            {showModalContribute && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <ContributeModal closeModal={toggleModalContribute} />
                </div>
            )}
        </div>
    );
};

export default CardsList;