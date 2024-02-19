import PropTypes from "prop-types";

import About from "./About";
import CloseButton from "./CloseButton";

const AboutModal = ({ closeModal }) => {
    return (
        <div className="bg-white p-4 rounded-lg w-11/12 md:max-w-md">
            <CloseButton onClick={closeModal} />
            <About />
        </div>
    );
};

export default AboutModal;

AboutModal.propTypes = {
    closeModal: PropTypes.func,
};