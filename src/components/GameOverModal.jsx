import { useState, useEffect } from 'react';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { copyToClipboard } from "@phntms/react-share";

import FacebookIcon from '../assets/facebook.png';
import TwitterIcon from '../assets/twitter.png';
import Whatsapp from '../assets/whatsapp.png';
import Link from '../assets/link.png';
import Replay from '../assets/replay.png';
import GameOverImg from '../assets/gameover-text.png';
import ScoreText from '../assets/score-text.png';

const GameOverModal = ({ score }) => {
    const [copied, setCopied] = useState(false);
    const textToShare = `Hey ! J'ai obtenu un score de ${score} sur le jeu ! Viens l'essayer toi aussi !`;
    const url = 'https://votre-url-du-jeu.com'; // Remplacez par l'URL de votre jeu

    const handleReplay = () => {
        window.location.reload();
    }

    const handleCopyToClipboard = () => {
        copyToClipboard(url);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    useEffect(() => {
        let timeout;
        if (copied) {
            timeout = setTimeout(() => {
                setCopied(false);
            }, 3000); // Masquer le message après 3 secondes
        }
        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="fixed inset-x-0 top-0 bg-my-green font-bold text-white text-center py-2 transform transition-transform duration-300 ease-out" style={{ transform: copied ? 'translateY(0)' : 'translateY(-100%)' }}><span>Le lien a été copié avec succès !</span></div>
                <div className="bg-white flex flex-col justify-center items-center p-8 rounded-lg max-w-md gap-5">
                    <img className='' src={GameOverImg} alt="game over" />
                    <div className='flex flex-row gap-2 items-center justify-center h-full'>
                        <img src={ScoreText} alt="score" className='w-32' />
                        <div className="flex items-end">
                            <p className="text-3xl font-doodle text-my-gray-dark">{score}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-3'>
                        <div className="flex justify-evenly items-center gap-2">
                            <FacebookShareButton url={url} quote={textToShare}>
                                <img className='hover:rotate-45 transition-all' src={FacebookIcon} alt="" />
                            </FacebookShareButton>

                            <TwitterShareButton url={url} title={textToShare}>
                                <img className='hover:rotate-45 transition-all' src={TwitterIcon} alt="" />
                            </TwitterShareButton>

                            <WhatsappShareButton url={url} title={textToShare}>
                                <img className='hover:rotate-45 transition-all' src={Whatsapp} alt="" />
                            </WhatsappShareButton>

                            <img className='hover:rotate-45 transition-all cursor-pointer' src={Link} onClick={handleCopyToClipboard} />
                            {/* {copied && (
                            <div className={`fixed inset-x-0 top-0 bg-green-400 text-white text-center py-2 transform ${copied ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
                            <span>Le lien a été copié avec succès !</span>
                            </div>
                        )} */}
                        </div>
                        <div className='w-ful flex justify-center'>
                            <button className="transition-all" onClick={handleReplay}>
                                <img className='hover:rotate-45 transition-all' src={Replay} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameOverModal;
