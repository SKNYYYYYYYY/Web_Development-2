document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filter-form');
    const dateRange = document.getElementById('date-range');
    const customDateRange = document.getElementById('custom-date-range');
    const categorySelect = document.getElementById('category');
    const transactionsTable = document.getElementById('transactions-table').getElementsByTagName('tbody')[0];
    const totalIncome = document.getElementById('total-income');
    const totalExpenses = document.getElementById('total-expenses');
    const netAmount = document.getElementById('net-amount');
    const downloadCsvBtn = document.getElementById('download-csv');

    // Sample transaction data (replace with actual data from your backend)
    let transactions = [
        { date: '2024-09-25', description: 'Salary', category: 'Income', amount: 5000, type: 'income' },
        { date: '2024-09-26', description: 'Rent', category: 'Housing', amount: 1500, type: 'expense' },
        { date: '2024-09-27', description: 'Groceries', category: 'Food', amount: 200, type: 'expense' },
        { date: '2024-09-28', description: 'Freelance Work', category: 'Income', amount: 1000, type: 'income' },
        { date: '2024-09-29', description: 'Utilities', category: 'Bills', amount: 150, type: 'expense' }
    ];

    // Populate categories
    const categories = [...new Set(transactions.map(t => t.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Event listeners
    dateRange.addEventListener('change', function() {
        customDateRange.style.display = this.value === 'custom' ? 'block' : 'none';
    });

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        renderTransactions(filterTransactions());
    });

    downloadCsvBtn.addEventListener('click', downloadCSV);

    function filterTransactions() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;

        return transactions.filter(t => {
            const dateMatch = (dateRange.value === 'custom') 
                ? (t.date >= startDate && t.date <= endDate)
                : (new Date(t.date) >= new Date(Date.now() - dateRange.value * 24 * 60 * 60 * 1000));
            const categoryMatch = category === 'all' || t.category === category;
            const typeMatch = type === 'all' || t.type === type;
            return dateMatch && categoryMatch && typeMatch;
        });
    }

    function renderTransactions(filteredTransactions) {
        transactionsTable.innerHTML = '';
        let incomeTotal = 0;
        let expenseTotal = 0;

        filteredTransactions.forEach(t => {
            const row = transactionsTable.insertRow();
            row.insertCell(0).textContent = t.date;
            row.insertCell(1).textContent = t.description;
            row.insertCell(2).textContent = t.category;
            row.insertCell(3).textContent = `$${t.amount.toFixed(2)}`;
            row.insertCell(4).textContent = t.type;

            if (t.type === 'income') {
                incomeTotal += t.amount;
            } else {
                expenseTotal += t.amount;
            }
        });

        totalIncome.textContent = `$${incomeTotal.toFixed(2)}`;
        totalExpenses.textContent = `$${expenseTotal.toFixed(2)}`;
        netAmount.textContent = `$${(incomeTotal - expenseTotal).toFixed(2)}`;
    }

    function downloadCSV() {
        let csvContent = 'Date,Description,Category,Amount,Type\n';

        transactions.forEach(t => {
            csvContent += `${t.date},${t.description},${t.category},${t.amount},${t.type}\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'transactions.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Initial rendering of transactions
    renderTransactions(transactions);
});
