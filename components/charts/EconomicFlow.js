function EconomicFlow() {
    try {
        React.useEffect(() => {
            const ctx = document.getElementById('economicFlowChart');
            const data = {
                labels: ['Protocol Revenue', 'Staking Rewards', 'Development', 'Marketing'],
                datasets: [{
                    label: 'Token Flow Distribution',
                    data: [40, 30, 20, 10],
                    backgroundColor: [
                        'rgba(108, 43, 217, 0.8)',
                        'rgba(131, 71, 229, 0.8)',
                        'rgba(147, 51, 234, 0.8)',
                        'rgba(168, 85, 247, 0.8)'
                    ],
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }]
            };
            createFlowChart(ctx, data);
        }, []);

        return (
            <div data-name="economic-flow-chart" className="w-full h-64 md:h-96">
                <canvas id="economicFlowChart"></canvas>
            </div>
        );
    } catch (error) {
        console.error('EconomicFlow render error:', error);
        reportError(error);
        return null;
    }
}
