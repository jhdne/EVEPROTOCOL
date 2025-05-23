function Features() {
    try {
        const features = [
            {
                icon: "fa-clock",
                title: "Temporal Knowledge Graph",
                description: "Track and analyze data evolution over time with our advanced temporal graph structure"
            },
            {
                icon: "fa-network-wired",
                title: "Deep Data Integration",
                description: "Seamless integration with Chainlink, Pyth Network, and other leading data providers"
            },
            {
                icon: "fa-robot",
                title: "AI Agent Enhancement",
                description: "Empower AI agents with structured, context-aware data for better decision making"
            },
            {
                icon: "fa-database",
                title: "High-Quality Data",
                description: "Access reliable, real-time data from multiple decentralized sources"
            }
        ];

        return (
            <section id="features" data-name="features-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Key Features</h2>
                    <p className="section-subtitle">Discover what makes EVE Protocol unique</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {features.map((feature, index) => (
                            <div key={index} data-name={`feature-card-${index}`}
                                 className="feature-card p-6 rounded-lg hover:scale-105 transition-transform">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mr-4">
                                        <i className={`fas ${feature.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features render error:', error);
        reportError(error);
        return null;
    }
}
