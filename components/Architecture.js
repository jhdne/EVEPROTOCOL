function Architecture() {
    try {
        const layers = [
            {
                title: "Data Sources",
                items: ["Chainlink Data Feeds", "Chainlink Functions", "Pyth Network", "DIA", "Blockchain Events"],
                icon: "fa-database"
            },
            {
                title: "EVE Processing Engine",
                items: ["Data Normalization", "Entity Resolution", "Temporal Indexing", "Graph Construction"],
                icon: "fa-cogs"
            },
            {
                title: "Knowledge Graph Storage",
                items: ["Neo4j Database", "Temporal Metadata", "Entity Relationships", "Graph Indices"],
                icon: "fa-project-diagram"
            },
            {
                title: "API & SDK Layer",
                items: ["RESTful API", "GraphQL Endpoint", "SDK Libraries", "Query Optimization"],
                icon: "fa-code"
            }
        ];

        return (
            <section id="architecture" data-name="architecture-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Technical Architecture</h2>
                    <p className="section-subtitle">Understanding the EVE Protocol stack</p>

                    <div className="architecture-diagram mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {layers.map((layer, index) => (
                                <div key={index} data-name={`arch-layer-${index}`} 
                                     className="card relative">
                                    {index < layers.length - 1 && (
                                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                            <i className="fas fa-arrow-right text-purple-500"></i>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <i className={`fas ${layer.icon} text-4xl text-purple-500`}></i>
                                        <h3 className="text-xl font-semibold mt-4">{layer.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {layer.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center">
                                                <i className="fas fa-check text-purple-500 mr-2"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Architecture render error:', error);
        reportError(error);
        return null;
    }
}
