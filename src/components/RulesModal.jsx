import PropTypes from "prop-types";

import Rules from "./Rules";
import CloseButton from "./CloseButton";

const RulesModal = ({ closeModal }) => {
    return (
        <div className="bg-white p-4 rounded-lg w-11/12 md:max-w-md">
            <CloseButton onClick={closeModal} />
            <Rules />
        </div>
    );
};

export default RulesModal;

RulesModal.propTypes = {
    closeModal: PropTypes.func,
};