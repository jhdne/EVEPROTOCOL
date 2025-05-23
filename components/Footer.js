function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-[#0a0a1a] py-12 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4">EVE Protocol</h3>
                            <p className="text-gray-400">Various high-quality on-chain and off-chain data</p>
                        </div>
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#roadmap" className="text-gray-400 hover:text-white">Roadmap</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-community">
                            <h4 className="text-lg font-semibold mb-4">Community</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://x.com/EVEPROTOCOLL" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       className="text-gray-400 hover:text-white">
                                        <i className="fab fa-twitter mr-2"></i>Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} EVE Protocol. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer render error:', error);
        reportError(error);
        return null;
    }
}
