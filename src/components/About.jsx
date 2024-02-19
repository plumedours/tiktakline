const About = () => {
    return (
        <div className="overflow-x-auto max-h-96">
            <h2 className="text-2xl font-bold mb-4">À Propos</h2>
            <p className="text-lg mb-4">Salut ! Je suis Maxime Bory, le créateur de ce jeu réalisé avec React.js. Bienvenue dans l'univers de TikTakLine ! Inspiré du jeu de société Timeline, ce jeu qui mettra vos connaissances historiques à l'épreuve !</p>
            <p className="text-lg mb-4">Ce jeu a été conçu pour allier amusement et apprentissage. Plongez-vous dans les méandres du temps et essayez de placer les cartes dans l'ordre chronologique sur la ligne de temps.</p>
            <p className="text-lg mb-4">Si vous souhaitez en savoir plus sur mes autres projets ou me contacter, n'hésitez pas à visiter mon portfolio sur <a href="https://www.plumedours.fr" target="_blank" className="underline hover:text-my-blue-dark">plumedours.fr</a>.</p>
            <p className="text-lg mb-4">J'espère que vous apprécierez jouer à TikTakLine autant que j'ai aimé le créer ! Bonne partie !</p>

            {/* Section Crédits */}
            <div>
                <h3 className="text-xl font-bold mb-2">Crédits</h3>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                        Interface :
                        <ul className="list-disc pl-6">
                            <li>Police d'écriture : <a href="https://www.dafont.com/zuka-doodle.font" target="_blank" className="underline hover:text-my-blue-dark">dafont.com</a></li>
                            <li>Icônes et images : <a href="https://icons8.fr" target="_blank" className="underline hover:text-my-blue-dark">icons8.fr</a>, <a href="https://www.freepik.com/" target="_blank" className="underline hover:text-my-blue-dark">freepik.com</a>, <a href="https://pixabay.com/fr/" target="_blank" className="underline hover:text-my-blue-dark">pixabay.com</a></li>
                            <li>Couleurs : <a href="https://flatuicolors.com/palette/ca" target="_blank" className="underline hover:text-my-blue-dark">flatuicolors.com</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Contributeurs :
                        <ul className="list-disc pl-6">
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
