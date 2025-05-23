function About() {
    try {
        return (
            <section id="about" data-name="about-section" className="section">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-name="about-content">
                            <h2 className="text-3xl font-bold mb-6">
                                Empowering AI Agents with Web3 Temporal Knowledge
                            </h2>
                            <p className="text-gray-400 mb-6">
                                EVE Protocol is revolutionizing the way AI agents interact with Web3 data through our 
                                advanced temporal knowledge graph technology. We provide structured, time-aware data 
                                that enables AI agents to make smarter decisions and understand complex relationships 
                                in the blockchain ecosystem.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-semibold mb-1">High-Quality Data Integration</h3>
                                        <p className="text-gray-400">Deep integration with Chainlink, Pyth Network, and other leading data providers</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-semibold mb-1">Temporal Knowledge Graphs</h3>
                                        <p className="text-gray-400">Track and analyze data evolution over time with advanced graph structures</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-semibold mb-1">AI-Ready Format</h3>
                                        <p className="text-gray-400">Structured data optimized for machine learning and AI consumption</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <a href="#features" className="button button-primary">
                                    Explore Features
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div data-name="about-visualization" className="relative">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-bg p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="card">
                                            <div className="text-2xl font-bold text-purple-500">100M+</div>
                                            <div className="text-sm text-gray-400">Data Points</div>
                                        </div>
                                        <div className="card">
                                            <div className="text-2xl font-bold text-purple-500">24/7</div>
                                            <div className="text-sm text-gray-400">Support</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <div className="card">
                                            <div className="text-2xl font-bold text-purple-500">10K+</div>
                                            <div className="text-sm text-gray-400">AI Agents</div>
                                        </div>
                                        <div className="card">
                                            <div className="text-2xl font-bold text-purple-500">99.9%</div>
                                            <div className="text-sm text-gray-400">Uptime</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About render error:', error);
        reportError(error);
        return null;
    }
}
