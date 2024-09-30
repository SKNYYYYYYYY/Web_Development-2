// Financial Reports JS

// Initialize charts
let incomeVsExpensesChart;
let savingsProgressChart;
let categoryBreakdownChart;

function createCharts() {
    const incomeVsExpensesCtx = document.getElementById('income-vs-expenses').getContext('2d');
    const savingsProgressCtx = document.getElementById('savings-progress').getContext('2d');
    const categoryBreakdownCtx = document.getElementById('category-breakdown').getContext('2d');

    // Income vs Expenses Chart (Bar)
    incomeVsExpensesChart = new Chart(incomeVsExpensesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [{
                label: 'Income',
                data: [2000, 2500, 2200],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }, {
                label: 'Expenses',
                data: [1800, 2200, 2000],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Monthly Income vs. Expenses'
            }
        }
    });

    // Savings Progress Chart (Line)
    savingsProgressChart = new Chart(savingsProgressCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [{
                label: 'Savings Progress',
                data: [200, 300, 400],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Savings Progress'
            }
        }
    });

    // Category Breakdown (Pie)
    categoryBreakdownChart = new Chart(categoryBreakdownCtx, {
        type: 'pie',
        data: {
            labels: ['Food', 'Rent', 'Entertainment'],
            datasets: [{
                label: 'Category Breakdown',
                data: [800, 600, 400],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Spending Breakdown by Category'
            }
        }
    });
}

// Generate Report Button
document.getElementById('generate-report').addEventListener('click', function () {
    // You can update the charts with new data here based on the selected date range and filters
    createCharts();
});

// Initial load
window.onload = createCharts;
