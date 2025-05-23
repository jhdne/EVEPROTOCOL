function TokenDistribution() {
    try {
        React.useEffect(() => {
            // Wait for Chart.js to be available
            if (typeof Chart !== 'undefined') {
                const ctx = document.getElementById('tokenDistributionChart');
                if (ctx) {
                    // Destroy existing chart if it exists
                    const existingChart = Chart.getChart(ctx);
                    if (existingChart) {
                        existingChart.destroy();
                    }

                    const data = {
                        labels: [
                            'Ecosystem Fund',
                            'Team & Advisors',
                            'Public Sale',
                            'Liquidity'
                        ],
                        datasets: [{
                            data: [35, 20, 35, 10],
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

                    const options = {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '70%',
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    color: '#fff',
                                    font: {
                                        size: 14
                                    }
                                }
                            }
                        }
                    };

                    new Chart(ctx, {
                        type: 'doughnut',
                        data: data,
                        options: options
                    });
                }
            }
        }, []);

        return (
            <div data-name="token-distribution-chart" className="w-full h-64 md:h-96">
                <canvas id="tokenDistributionChart"></canvas>
            </div>
        );
    } catch (error) {
        console.error('TokenDistribution render error:', error);
        reportError(error);
        return null;
    }
}
