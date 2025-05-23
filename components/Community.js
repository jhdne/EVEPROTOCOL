function Community() {
    try {
        const socialLinks = [
            { icon: 'fa-twitter', label: 'Twitter', url: '#' },
            { icon: 'fa-discord', label: 'Discord', url: '#' },
            { icon: 'fa-telegram', label: 'Telegram', url: '#' },
            { icon: 'fa-medium', label: 'Medium', url: '#' }
        ];

        return (
            <section id="community" data-name="community-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Join Our Community</h2>
                    <p className="section-subtitle">Be part of the EVE ecosystem and help shape the future of Web3 AI</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {socialLinks.map((social, index) => (
                            <div key={index} data-name={`social-card-${social.label.toLowerCase()}`} 
                                 className="card text-center hover:scale-105 transition-transform">
                                <a href={social.url} target="_blank" rel="noopener noreferrer"
                                   className="block p-6">
                                    <div className="social-icon mx-auto mb-4">
                                        <i className={`fab ${social.icon} text-2xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{social.label}</h3>
                                    <p className="text-gray-400">Join our {social.label} community</p>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-6">Stay Updated</h3>
                        <form className="max-w-md mx-auto flex gap-4">
                            <input type="email" placeholder="Enter your email" 
                                   className="flex-grow px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500" />
                            <button type="submit" className="button button-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Community render error:', error);
        reportError(error);
        return null;
    }
}
