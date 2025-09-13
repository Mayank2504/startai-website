// Chart.js integration for StartAI website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts on pages that have them
    initCharts();
});

function initCharts() {
    // Revenue Chart
    if (document.getElementById('revenueChart')) {
        renderRevenueChart();
    }

    // Cash Flow Chart
    if (document.getElementById('cashFlowChart')) {
        renderCashFlowChart();
    }

    // Growth Chart
    if (document.getElementById('growthChart')) {
        renderGrowthChart();
    }
}

// Render revenue chart
function renderRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');

    const revenueData = {
        labels: ['Month 1-3', 'Month 4-6', 'Month 7-9', 'Month 10-12'],
        datasets: [{
            label: 'Subscription Revenue',
            data: [0, 800000, 2400000, 4200000],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2,
            borderRadius: 4,
            borderSkipped: false,
        }, {
            label: 'Enterprise Revenue',
            data: [0, 200000, 600000, 1200000],
            backgroundColor: 'rgba(16, 185, 129, 0.8)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            borderRadius: 4,
            borderSkipped: false,
        }, {
            label: 'Premium Features',
            data: [0, 100000, 300000, 600000],
            backgroundColor: 'rgba(245, 158, 11, 0.8)',
            borderColor: 'rgba(245, 158, 11, 1)',
            borderWidth: 2,
            borderRadius: 4,
            borderSkipped: false,
        }]
    };

    const revenueChart = new Chart(ctx, {
        type: 'bar',
        data: revenueData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Breakdown by Quarter',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            return new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 1
                            }).format(value);
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Render cash flow chart
function renderCashFlowChart() {
    const ctx = document.getElementById('cashFlowChart').getContext('2d');

    const cashFlowData = {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
        datasets: [{
            label: 'Cash Flow',
            data: [-500000, -300000, -100000, 200000, 400000, 600000, 300000, 500000, 700000, 900000, 1100000, 1300000],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(59, 130, 246, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
        }]
    };

    const cashFlowChart = new Chart(ctx, {
        type: 'line',
        data: cashFlowData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Cash Flow Projection',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = 'Cash Flow: ';
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Cash Flow ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 1
                            }).format(value);
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Render growth chart
function renderGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');

    const growthData = {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
        datasets: [{
            label: 'Active Users',
            data: [0, 500, 1500, 5000, 12000, 25000, 40000, 60000, 85000, 120000, 160000, 210000],
            borderColor: 'rgba(139, 92, 246, 1)',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(139, 92, 246, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
        }]
    };

    const growthChart = new Chart(ctx, {
        type: 'line',
        data: growthData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'User Growth Trajectory',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = 'Active Users: ';
                            label += new Intl.NumberFormat('en-US').format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Active Users'
                    },
                    ticks: {
                        callback: function(value) {
                            return new Intl.NumberFormat('en-US').format(value);
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Generic chart rendering function
function renderChart(chartData, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id "${canvasId}" not found`);
        return null;
    }

    const ctx = canvas.getContext('2d');

    // Default chart options
    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    };

    // Merge user options with defaults
    const options = { ...defaultOptions, ...chartData.options };

    const chartConfig = {
        type: chartData.type || 'bar',
        data: chartData.data,
        options: options
    };

    return new Chart(ctx, chartConfig);
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Utility function to format numbers
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// Export functions for potential use in other scripts
window.StartAICharts = {
    renderChart: renderChart,
    formatCurrency: formatCurrency,
    formatNumber: formatNumber
};
