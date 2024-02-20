const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-my-gray-dark text-white text-sm text-center py-4">
            <p>&copy; {currentYear} Bory Maxime</p>
        </footer>
    );
}

export default Footer;