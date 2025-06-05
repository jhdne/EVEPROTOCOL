function Tokenomics() {
    try {
        const tokenDetails = [
            { label: "Token Name", value: "$EVE" },
            { label: "Total Supply", value: "1,000,000,000" },
            { label: "Network", value: "Base" },
        ];
        const tokenAllocation = [
            {
                title: "Ecosystem Development Fund",
                percentage: "35%",
                description: "Developer incentives, community building, partnerships"
            },
            {
                title: "Core Team & Advisors",
                percentage: "20%",
                description: "3-4 years linear vesting"
            },
            {
                title: "Pre-sale",
                percentage: "35%",
                description: "Subject to lock-up and vesting periods"
            },
            {
                title: "Liquidity & Exchange",
                percentage: "10%",
                description: "DEX and CEX liquidity provision"
            }
        ];

        return (
            <section id="tokenomics" data-name="tokenomics-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Tokenomics</h2>
                    <p className="section-subtitle">Understanding the EVE token economy</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        <div data-name="token-distribution">
                            <h3 className="text-2xl font-semibold mb-6">Token Distribution</h3>
                            <TokenDistribution />
                        </div>

                        <div data-name="token-details">
                            <h3 className="text-2xl font-semibold mb-6">Token Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {tokenDetails.map((detail, index) => (
                                    <div key={index} className="card">
                                        <h4 className="text-gray-400">{detail.label}</h4>
                                        <p className="text-xl font-semibold mt-2">{detail.value}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-semibold mt-8 mb-4">Token Allocation</h3>
                            <div className="space-y-2">
                                {tokenAllocation.map((item, index) => (
                                    <div key={index} className="card py-3">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-lg font-semibold">{item.title}</h4>
                                            <span className="text-purple-500 font-bold">{item.percentage}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Tokenomics render error:', error);
        reportError(error);
        return null;
    }
}
