function Team() {
    try {
        return (
            <section id="team" data-name="team-section" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Our Team</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Our team consists of blockchain experts, AI/machine learning researchers, and seasoned Web3 
                            community builders. We firmly believe that the combination of AI Agents and decentralized 
                            data will define the future of Web3.
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team render error:', error);
        reportError(error);
        return null;
    }
}
