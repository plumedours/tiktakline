import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => (
    <div className='w-full flex justify-end'>
        <button className="my-2 bg-my-red text-white py-1 px-1 font-bold rounded-md hover:bg-my-red-light transition-colors duration-300" onClick={onClick}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
);

export default CloseButton;

CloseButton.propTypes = {
    onClick: PropTypes.func,
};