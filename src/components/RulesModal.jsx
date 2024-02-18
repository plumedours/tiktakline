import Rules from "./Rules";

const RulesModal = ({ closeModal }) => {
    return (
        <div className="bg-white p-4 rounded-lg w-11/12 md:max-w-md">
            <Rules />
            <button className="mt-4 bg-my-gray-dark text-white py-2 px-4 rounded hover:bg-my-gray transition-all" onClick={closeModal}>Fermer</button>
        </div>
    );
};

export default RulesModal;  