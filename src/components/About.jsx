const About = () => {
    return (
        <div className="bg-white p-6 rounded-lg overflow-auto max-h-96">
            <h2 className="text-2xl font-bold mb-4">À Propos</h2>
            <p className="text-lg mb-4">Salut ! Je suis Maxime Bory, le créateur de ce jeu réalisé avec React.js. Bienvenue dans l'univers de TikTakLine ! Inspiré du jeu de société Timeline, ce jeu qui mettra vos connaissances historiques à l'épreuve !</p>
            <p className="text-lg mb-4">Ce jeu a été conçu pour allier amusement et apprentissage. Plongez-vous dans les méandres du temps et essayez de placer les cartes dans l'ordre chronologique sur la ligne de temps.</p>
            <p className="text-lg mb-4">Pour rendre ce jeu encore plus intéressant, j'ai utilisé des icônes provenant de <a href="https://icons8.fr" className="underline hover:text-blue-500">icons8.fr</a>. Ces icônes ajoutent une touche visuelle unique et attrayante au jeu.</p>
            <p className="text-lg mb-4">Si vous souhaitez en savoir plus sur mes autres projets ou me contacter, n'hésitez pas à visiter mon portfolio sur <a href="https://www.plumedours.fr" className="underline hover:text-blue-500">plumedours.fr</a>.</p>
            <p className="text-lg mb-4">J'espère que vous apprécierez jouer à TikTakLine autant que j'ai aimé le créer ! Bonne partie !</p>
        </div>
    );
}

export default About;
