document.addEventListener('DOMContentLoaded', function() {
    const budgetCategories = document.getElementById('budget-categories');
    const addCategoryBtn = document.getElementById('add-category');
    const saveBudgetBtn = document.getElementById('save-budget');
    const goalsList = document.getElementById('goals-list');
    const addGoalBtn = document.getElementById('add-goal');

    let categories = ['Housing', 'Food', 'Transportation', 'Entertainment', 'Utilities'];

    // Initialize budget categories
    function initializeBudgetCategories() {
        categories.forEach(category => addBudgetCategory(category));
    }

    // Add a new budget category
    function addBudgetCategory(category = '') {
        const div = document.createElement('div');
        div.className = 'budget-category';
        div.innerHTML = `
            <input type="text" value="${category}" placeholder="Category Name">
            <input type="number" placeholder="Budget Amount">
            <button class="remove-category">Remove</button>
        `;
        budgetCategories.appendChild(div);

        div.querySelector('.remove-category').addEventListener('click', function() {
            budgetCategories.removeChild(div);
            updateBudgetChart();
        });

        div.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateBudgetChart);
        });

        updateBudgetChart();
    }

    // Update the budget chart
    function updateBudgetChart() {
        const ctx = document.getElementById('budget-chart').getContext('2d');
        const categories = [];
        const amounts = [];

        document.querySelectorAll('.budget-category').forEach(category => {
            const inputs = category.querySelectorAll('input');
            categories.push(inputs[0].value || 'Unnamed');
            amounts.push(Number(inputs[1].value) || 0);
        });

        if (window.budgetChart) {
            window.budgetChart.destroy();
        }

        window.budgetChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: categories,
                datasets: [{
                    data: amounts,
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,  // Added to ensure the chart respects the container size
                title: {
                    display: true,
                    text: 'Budget Allocation'
                }
            }
        });
    }

    // Add a new financial goal
    function addFinancialGoal() {
        const div = document.createElement('div');
        div.className = 'goal-item';
        div.innerHTML = `
            <input type="text" placeholder="Goal Name">
            <input type="number" placeholder="Target Amount">
            <input type="date" placeholder="Target Date">
            <button class="remove-goal">Remove</button>
        `;
        goalsList.appendChild(div);

        div.querySelector('.remove-goal').addEventListener('click', function() {
            goalsList.removeChild(div);
        });
    }

    // Event listeners
    addCategoryBtn.addEventListener('click', () => addBudgetCategory());
    addGoalBtn.addEventListener('click', addFinancialGoal);

    saveBudgetBtn.addEventListener('click', function() {
        const budget = {};
        document.querySelectorAll('.budget-category').forEach(category => {
            const inputs = category.querySelectorAll('input');
            budget[inputs[0].value] = Number(inputs[1].value);
        });
        console.log('Budget saved:', budget);
        alert('Budget saved successfully!');
    });

    // Initialize the page
    initializeBudgetCategories();
    updateBudgetChart();
});