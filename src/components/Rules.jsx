const Rules = () => {
    return (
        <div className="bg-white p-6 rounded-lg overflow-auto max-h-96">
            <h2 className="text-2xl font-bold mb-4">Règles du Jeu</h2>
            <p className="text-lg mb-4">Bienvenue dans le jeu TikTakLine ! Voici les règles du jeu :</p>
            <ol className="list-decimal pl-6">
                <li className="mb-2">
                    <strong>Objectif :</strong> Mettez vos connaissances historiques à l'épreuve en plaçant les cartes dans l'ordre chronologique correct sur la ligne de temps.
                </li>
                <li className="mb-2">
                    <strong>Comment jouer :</strong>
                    <ol className="list-decimal pl-6">
                        <li>Sélectionnez une carte de votre main.</li>
                        <li>Placez-la où vous pensez qu'elle appartient sur la ligne de temps.</li>
                        <li>Gagnez un point si la carte est correctement placée.</li>
                        <li>Perdez un cœur si la carte est mal placée.</li>
                    </ol>
                </li>
                <li className="mb-2">
                    <strong>Conseils :</strong>
                    <ul className="list-disc pl-6">
                        <li>Utilisez votre intuition et prenez des risques.</li>
                        <li>Essayez de vous rappeler des dates approximatives ou des événements associés.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>Attention :</strong>
                    <ul className="list-disc pl-6">
                        <li>Chaque erreur vous coûte une vie.</li>
                        <li>Si vous perdez toutes vos vies, c'est le "Game Over" !</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
}

export default Rules;
