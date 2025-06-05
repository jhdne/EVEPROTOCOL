function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [showComingSoon, setShowComingSoon] = React.useState(false);

        const menuItems = [
            { label: 'About', href: '#about' },
            { label: 'Features', href: '#features' },
            { label: 'Roadmap', href: '#roadmap' }
        ];

        const handleLaunchClick = (e) => {
            e.preventDefault();
            setShowComingSoon(true);
            setTimeout(() => setShowComingSoon(false), 2000);
        };

        return (
            <header data-name="header" className="header fixed w-full top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <a href="#" data-name="logo" className="flex items-center">
                            <span className="text-xl font-bold">EVE Protocol</span>
                        </a>

                        {/* Desktop Menu */}
                        <nav data-name="desktop-nav" className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item, index) => (
                                <a key={index} href={item.href} 
                                   className="text-gray-300 hover:text-white transition-colors">
                                    {item.label}
                                </a>
                            ))}
                            <button className="button button-primary relative" onClick={handleLaunchClick}>
                                {showComingSoon ? 'Coming Soon' : 'Launch App'}
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button data-name="mobile-menu-button"
                                className="md:hidden text-gray-400 hover:text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <nav data-name="mobile-nav" 
                             className="md:hidden py-4 border-t border-gray-800">
                            {menuItems.map((item, index) => (
                                <a key={index} href={item.href}
                                   className="block py-2 text-gray-300 hover:text-white transition-colors"
                                   onClick={() => setIsMenuOpen(false)}>
                                    {item.label}
                                </a>
                            ))}
                            <button className="button button-primary w-full mt-4" onClick={handleLaunchClick}>
                                {showComingSoon ? 'Coming Soon' : 'Launch App'}
                            </button>
                        </nav>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header render error:', error);
        reportError(error);
        return null;
    }
}
