import { useState, useEffect, Fragment } from 'react';

import Dino from '../assets/dino.png';
import Robot from '../assets/robot.png';
import Heart from '../assets/heart.png';
import Arrow1 from '../assets/arrow1.png';
import Arrow2 from '../assets/arrow2.png';
import Arrow3 from '../assets/arrow3.png';
import Arrow4 from '../assets/arrow4.png';
import Arrow5 from '../assets/arrow5.png';
import Arrow6 from '../assets/arrow6.png';

import RulesModal from './RulesModal';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';
import GameOverModal from './GameOverModal';
import Navbar from './Navbar';
import cards from './Cards'

const images = [Arrow1, Arrow2, Arrow3, Arrow4, Arrow5, Arrow6];

const getRandomImages = (count) => {
    const randomImages = [];
    const usedIndexes = new Set();
    while (randomImages.length < count) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!usedIndexes.has(randomIndex)) {
            randomImages.push(images[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }
    return randomImages;
};

const Game = () => {
    const [timelineCards, setTimelineCards] = useState([]);
    const [hand, setHand] = useState([]);
    const [deck, setDeck] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [lives, setLives] = useState(5);
    const [showModalRules, setShowModalRules] = useState(false);
    const [showModalAbout, setShowModalAbout] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [arrowCount, setArrowCount] = useState(3);
    // const [timeLeft, setTimeLeft] = useState(20);
    // const [modalMessage, setModalMessage] = useState("");
    // const [showModalMessage, setShowModalMessage] = useState(false);

    // Chronomètre START
    // const startTimer = () => {
    //     setTimeLeft(20);
    // };

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : prevTime));
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);

    // useEffect(() => {
    //     if (timeLeft === 0) {
    //         setLives(prevLives => prevLives - 1);
    //         setTimeLeft(20);
    //     }
    // }, [timeLeft]);
    // Chronomètre END

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 460) {
                setArrowCount(2);
            } else if (window.innerWidth < 760) {
                setArrowCount(3);
            } else if (window.innerWidth < 1024) {
                setArrowCount(4);
            }
            else {
                setArrowCount(5);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const arrows = getRandomImages(arrowCount);

    const toggleModalRules = () => {
        setShowModalRules(!showModalRules);
    };

    const toggleModalAbout = () => {
        setShowModalAbout(!showModalAbout);
    };

    const toggleModalContact = () => {
        setShowModalContact(!showModalContact);
    };

    const handleGameOver = () => {
        setGameOver(true);
    }

    // Fonction pour mélanger un tableau
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // Tant qu'il reste des éléments à mélanger...
        while (0 !== currentIndex) {

            // Choisissez un élément restant...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // Et échangez-le avec l'élément actuel.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    useEffect(() => {
        const shuffledCards = shuffle(cards);
        const initialCard = shuffledCards[0];
        const remainingCards = shuffledCards.slice(1);
        setTimelineCards([initialCard]);
        setHand(remainingCards.slice(0, 4));
        setDeck(remainingCards.slice(4));
    }, []);

    const selectCard = (card) => {
        if (selectedCard === card) {
            setSelectedCard(null); // Si on reclique sur la carte sélectionnée, on retire la sélection
            setMessage("");
        } else {
            setMessage("Vous avez sélectionné : " + card.item);
            setSelectedCard(card); // Sinon, on sélectionne la nouvelle carte
        }
    }

    const placeCard = (index) => {
        if (selectedCard) {
            const newTimelineCards = [...timelineCards];
            newTimelineCards.splice(index, 0, selectedCard);
            const sortedTimelineCards = [...newTimelineCards].sort((a, b) => a.year - b.year);
            if (JSON.stringify(newTimelineCards) === JSON.stringify(sortedTimelineCards)) {
                setScore(score + 1); // La carte est placée correctement, l'utilisateur gagne un point
                setMessage("Bonne réponse !");
            } else {
                // setScore(score - 1); // La carte n'est pas placée correctement, l'utilisateur perd un point
                setMessage("Mauvaise réponse !");
                const updatedLives = lives - 1; // Réduire le nombre de vies
                if (updatedLives === 0) {
                    setLives(updatedLives);
                    setMessage("Game Over"); // Plus de vies, le jeu est terminé
                    handleGameOver();
                } else {
                    setLives(updatedLives);
                    setMessage("Mauvaise réponse !");
                }
            }
            setTimelineCards(sortedTimelineCards);
            setSelectedCard(null);
            const newHand = hand.filter(card => card !== selectedCard);
            if (deck.length > 0) {
                newHand.push(deck[0]); // Ajouter une nouvelle carte à la main
                setDeck(deck.slice(1)); // Retirer la carte ajoutée du deck
            }
            setHand(newHand);
        }
    }

    const resetGame = () => {
        // Réinitialisation des états du jeu
        setScore(0);
        setLives(5);
        setMessage("");
        setGameOver(false);

        // Réinitialisation des cartes en main et des cartes en jeu dans le deck
        const shuffledCards = shuffle(cards);
        const initialCard = shuffledCards[0];
        const remainingCards = shuffledCards.slice(1);
        setTimelineCards([initialCard]);
        setHand(remainingCards.slice(0, 4));
        setDeck(remainingCards.slice(4));
    };

    return (
        <div className='flex flex-col justify-center bg-my-green'>
            <Navbar openModalRules={toggleModalRules} openModalAbout={toggleModalAbout} openModalContact={toggleModalContact} resetGame={resetGame} />
            <div className="flex flex-col mt-5 items-center h-screen">
                <div className="bg-gray-200 flex flex-col justify-center p-4 rounded-lg w-11/12 lg:w-10/12">
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col">
                            <div className="text-xs font-bold text-gray-600 mt-2">Score :</div>
                            <div>{score}</div>
                        </div>
                        {/* <div className="flex flex-col">
                            <div className="text-xs text-gray-600 mt-2">Temps :</div>
                            <div>{timeLeft}</div>
                        </div> */}
                        <div className="flex flex-col">
                            <div className="text-xs font-bold text-gray-600 mt-2">Vies restantes :</div>
                            <div className="flex">
                                {/* Boucle pour afficher les cœurs en fonction du nombre de tentatives restantes */}
                                {Array.from({ length: lives }, (_, index) => (
                                    <img key={index} src={Heart} alt="Heart" className="w-6 h-6 md:w-8 md:h-8" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full items-center justify-evenly mb-4'>
                        <img src={Dino} alt="" className='w-14 md:w-20 lg:w-26' />
                        {arrows.map((arrow, index) => (
                            <img key={index} src={arrow} alt="" className='w-14 md:w-20 lg:w-26' />
                        ))}
                        <img src={Robot} alt="" className='w-14 md:w-20 lg:w-26' />
                    </div>
                    {message && (
                        <div
                            className={`text-md rounded-md px-2 py-1 w-fit self-center text-center font-semibold text-white mb-2 ${message === "Bonne réponse !" ? 'bg-my-green' :
                                message === "Mauvaise réponse !" ? 'bg-my-red' :
                                    'bg-my-orange'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                    <div className="flex justify-start items-center overflow-x-auto px-2" style={{ maxWidth: '100%' }}>
                        {timelineCards.map((card, index) => (
                            <Fragment key={index}>
                                <button className={`bg-my-blue text-white font-bold text-3xl mr-2 px-2 pb-1 w-10 h-10 rounded-full hover:bg-my-orange hover:scale-95 transition-all ml-2 flex items-center justify-center`} onClick={() => placeCard(index)}>+</button>
                                <div className={`bg-my-green pb-2 rounded-md shadow-md aspect-w-2 aspect-h-3 min-w-32 max-w-40 min-h-full ${selectedCard === card ? 'bg-blue-200' : ''}`}>
                                    <img src={card.img} alt={card.item} className='w-full rounded-t-md' />
                                    <div className='flex flex-col justify-center text-center py-2 gap-1'>
                                        <div className='font-semibold text-white'>
                                            {card.item}
                                        </div>
                                        <div className='italic text-white text-sm font-semibold'>
                                            {card.year}
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                        <button
                            className="bg-my-blue text-white font-bold text-3xl px-2 pb-1 w-10 h-10 rounded-full hover:bg-my-orange hover:scale-95 transition-all ml-2 flex items-center justify-center"
                            onClick={() => placeCard(timelineCards.length)}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex flex-row justify-start md:justify-center mt-4 overflow-x-auto">
                        {hand.map((card, index) => (
                            <button key={index} className={`bg-my-blue text-white pb-2 rounded-md hover:bg-my-orange hover:scale-95 mr-2 aspect-w-2 aspect-h-3 min-w-32 min-h-full max-w-48 transition-all flex flex-col items-start justify-center ${selectedCard === card ? 'bg-my-orange' : ''}`} onClick={() => selectCard(card)}>
                                <img src={card.img} alt={card.item} className='w-full rounded-t-md' />
                                <div className='flex flex-col justify-center w-full h-full'>
                                    <p className='font-semibold text-center'>{card.item}</p>
                                </div>
                            </button>
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
            </div>
            {gameOver && <GameOverModal score={score} resetGame={resetGame} />}
        </div>
    );
}

export default Game;
