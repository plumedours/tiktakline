import PropTypes from "prop-types";

import Contact from "./Contact";
import CloseButton from "./CloseButton";

const ContactModal = ({ closeModal }) => {
    return (
        <div className="bg-white p-4 rounded-lg w-11/12 md:max-w-md">
            <CloseButton onClick={closeModal} />
            <Contact />
        </div>
    );
};

export default ContactModal;

ContactModal.propTypes = {
    closeModal: PropTypes.func,
};