document.addEventListener('DOMContentLoaded', function() {
    // Sample data (replace with actual data from your backend)
    const financialData = {
        income: 5000,
        expenses: 3500,
        accounts: [
            { name: 'Checking', balance: 2500 },
            { name: 'Savings', balance: 10000 },
            { name: 'Investment', balance: 15000 }
        ],
        transactions: [
            { date: '2024-09-25', description: 'Salary', amount: 5000, type: 'income' },
            { date: '2024-09-26', description: 'Rent', amount: -1500, type: 'expense' },
            { date: '2024-09-27', description: 'Groceries', amount: -200, type: 'expense' }
        ],
        categories: ['Housing', 'Food', 'Transportation', 'Entertainment', 'Utilities']
    };

    // Render pie chart
    const pieCtx = document.getElementById('pie-chart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                data: [financialData.income, financialData.expenses],
                backgroundColor: ['#4CAF50', '#F44336']
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Income vs Expenses'
            }
        }
    });

    // Render bar chart
    const barCtx = document.getElementById('bar-chart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: financialData.categories,
            datasets: [{
                label: 'Spending by Category',
                data: [1500, 500, 300, 200, 1000], // Replace with actual data
                backgroundColor: '#2196F3'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Render account balances
    const balanceList = document.getElementById('balance-list');
    financialData.accounts.forEach(account => {
        const li = document.createElement('li');
        li.textContent = `${account.name}: ${account.balance} Ksh.`;
        balanceList.appendChild(li);
    });

    // Render recent transactions
    const transactionList = document.getElementById('transaction-list');
    financialData.transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.date} - ${transaction.description}: ${transaction.amount} Ksh.`;
        li.style.color = transaction.type === 'income' ? 'green' : 'red';
        transactionList.appendChild(li);
    });

    // Calculate and render financial health score
    const healthScore = document.getElementById('health-score');
    const score = calculateFinancialHealth(financialData);
    healthScore.textContent = score;
    healthScore.style.color = score > 70 ? 'green' : score > 40 ? 'orange' : 'red';

    // Add event listeners for quick action buttons
    document.getElementById('add-income').addEventListener('click', () => alert('Add Income form would open here'));
    document.getElementById('add-expense').addEventListener('click', () => alert('Add Expense form would open here'));

    // Add event listener for time period selection
    document.getElementById('period-select').addEventListener('change', updateDashboard);
});

function calculateFinancialHealth(data) {
    // This is a simplified calculation. Replace with your actual algorithm.
    const incomeRatio = data.income / (data.income + data.expenses) * 100;
    return Math.round(incomeRatio);
}

function updateDashboard() {
    // This function would update the dashboard based on the selected time period
    console.log('Updating dashboard for period:', document.getElementById('period-select').value);
    // Implement the logic to fetch and update data based on the selected period
}
