import PropTypes from 'prop-types';

import CloseButton from './CloseButton';

const ContributeModal = ({ closeModal }) => {

    return (
        <div className="bg-white p-4 rounded-lg w-11/12 md:max-w-md">
            <CloseButton onClick={closeModal} />
            <div className='overflow-x-auto max-h-96'>
                <h2 className="text-lg font-bold mb-4">Envie de laisser votre marque ?</h2>
                <p className="text-gray-700 mb-4">
                    🚀 Prêt à contribuer et à ajouter votre touche personnelle au jeu ? Voici comment faire :
                </p>
                <ol className="list-decimal pl-6">
                    <li className="mb-2">Envoyez un e-mail à <a href="mailto:bory.maxime@gmail.com" className="underline hover:text-blue-500 font-bold">bory.maxime@gmail.com</a>.</li>
                    <li className="mb-2">Incluez les informations suivantes dans votre e-mail :</li>
                    <ul className="list-disc pl-6">
                        <li className="mb-1">Le thème de votre carte</li>
                        <li className="mb-1">Le titre de l'invention, du monument, ou autre (le nom à donner à la carte)</li>
                        <li className="mb-1">L'année</li>
                        <li className="mb-1">Un lien URL ou une image directe au format JPG, dimensions : 300px de large x 200px de haut</li>
                        <li className="mb-1">Précisez si vous souhaitez voir votre nom ou votre pseudo dans la rubrique "Crédits" de ceux qui ont contribué</li>
                    </ul>
                    <li className="mt-4">Envoyez votre e-mail et attendez la confirmation de l'ajout de votre carte ! 🎉</li>
                </ol>
            </div>
        </div>
    );
};

export default ContributeModal;

ContributeModal.propTypes = {
    closeModal: PropTypes.func,
};