function createDoughnutChart(ctx, data, options = {}) {
    try {
        // Ensure Chart.js is available
        if (typeof Chart === 'undefined') {
            throw new Error('Chart.js is not loaded');
        }

        // Destroy existing chart if it exists
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        return new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
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
                    },
                    ...options
                }
            }
        });
    } catch (error) {
        console.error('Chart creation error:', error);
        reportError(error);
    }
}

function createFlowChart(ctx, data, options = {}) {
    try {
        // Ensure Chart.js is available
        if (typeof Chart === 'undefined') {
            throw new Error('Chart.js is not loaded');
        }

        // Destroy existing chart if it exists
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        return new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    }
                },
                ...options
            }
        });
    } catch (error) {
        console.error('Chart creation error:', error);
        reportError(error);
    }
}
