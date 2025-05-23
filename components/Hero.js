function Hero() {
    try {
        return (
            <section data-name="hero-section" className="hero pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Web3 Temporal Knowledge Graph Protocol for
                            <span className="gradient-text"> AI Agents</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Empowering AI Agents with high-quality, structured temporal knowledge graphs 
                            for smarter decision-making in the Web3 ecosystem
                        </p>
                        
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-purple-500">1M+</h3>
                                <p className="text-gray-400">Data Points</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-purple-500">1K+</h3>
                                <p className="text-gray-400">AI Agents</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-purple-500">99.9%</h3>
                                <p className="text-gray-400">Uptime</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-purple-500">24/7</h3>
                                <p className="text-gray-400">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero render error:', error);
        reportError(error);
        return null;
    }
}
