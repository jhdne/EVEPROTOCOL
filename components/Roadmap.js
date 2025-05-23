function Roadmap() {
    try {
        const phases = [
            {
                phase: "Phase 1",
                title: "Core Technology & Community Launch",
                duration: "2 Months",
                items: [
                    "Develop temporal knowledge graph core engine (MVP)",
                    "Implement Neo4j graph database integration",
                    "Launch community channels & whitepaper",
                    "Release demo version"
                ]
            },
            {
                phase: "Phase 2",
                title: "Data Integration & Developer Ecosystem",
                duration: "3 Months",
                items: [
                    "Integrate Chainlink & Pyth Network data sources",
                    "Release API documentation & SDK",
                    "Launch token pre-sale",
                    "Token launch on major DEX",
                    "First AI Agent partnerships"
                ]
            },
            {
                phase: "Phase 3",
                title: "Ecosystem Expansion",
                duration: "3-4 Months",
                items: [
                    "Expand AI Agent partnerships",
                    "Launch GNN-based features (Beta)",
                    "CEX listings",
                    "Developer hackathon"
                ]
            },
            {
                phase: "Phase 4",
                title: "Long-term Innovation",
                duration: "Ongoing",
                items: [
                    "Optimize graph performance",
                    "Explore ZK technology integration",
                    "Launch innovation fund",
                    "Regular ecosystem reports"
                ]
            }
        ];

        return (
            <section id="roadmap" data-name="roadmap-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Roadmap</h2>
                    <p className="section-subtitle">Our journey to revolutionize Web3 AI</p>
                    
                    <div className="mt-12 space-y-12">
                        {phases.map((phase, index) => (
                            <div key={index} data-name={`roadmap-phase-${index + 1}`} 
                                 className="roadmap-item fade-in">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-purple-500 mb-2">
                                        {phase.phase} - {phase.title}
                                    </h3>
                                    <p className="text-gray-400">{phase.duration}</p>
                                </div>
                                <ul className="space-y-3">
                                    {phase.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Roadmap render error:', error);
        reportError(error);
        return null;
    }
}
