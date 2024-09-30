document.addEventListener('DOMContentLoaded', function() {
    const goalForm = document.getElementById('goal-form');
    const goalsContainer = document.getElementById('goals-container');
    const timelineContainer = document.getElementById('timeline-container');

    let goals = JSON.parse(localStorage.getItem('savingsGoals')) || [];

    function renderGoals() {
        goalsContainer.innerHTML = '';
        timelineContainer.innerHTML = '';
        
        goals.forEach((goal, index) => {
            const goalElement = createGoalElement(goal, index);
            goalsContainer.appendChild(goalElement);
            
            const timelineItem = createTimelineItem(goal);
            timelineContainer.appendChild(timelineItem);
        });
    }

    function createGoalElement(goal, index) {
        const div = document.createElement('div');
        div.className = 'goal-item';
        const progress = calculateProgress(goal);
        
        div.innerHTML = `
            <h3>${goal.name}</h3>
            <p>Target: $${goal.amount}</p>
            <p>Date: ${goal.date}</p>
            <p>Progress: $${goal.currentAmount} (${progress}%)</p>
            <div class="goal-progress">
                <div class="goal-progress-bar" style="width: ${progress}%"></div>
            </div>
            <button onclick="updateGoal(${index})">Update Progress</button>
            <button onclick="deleteGoal(${index})">Delete Goal</button>
        `;
        
        return div;
    }

    function createTimelineItem(goal) {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-content">
                <h4>${goal.name}</h4>
                <p>Target: $${goal.amount} by ${goal.date}</p>
            </div>
        `;
        return div;
    }

    function calculateProgress(goal) {
        return Math.round((goal.currentAmount / goal.amount) * 100);
    }

    function addGoal(name, amount, date) {
        goals.push({
            name,
            amount: parseFloat(amount),
            date,
            currentAmount: 0
        });
        saveGoals();
        renderGoals();
    }

    window.updateGoal = function(index) {
        const newAmount = prompt("Enter new current amount:");
        if (newAmount !== null) {
            goals[index].currentAmount = parseFloat(newAmount);
            saveGoals();
            renderGoals();
        }
    }

    window.deleteGoal = function(index) {
        if (confirm("Are you sure you want to delete this goal?")) {
            goals.splice(index, 1);
            saveGoals();
            renderGoals();
        }
    }

    function saveGoals() {
        localStorage.setItem('savingsGoals', JSON.stringify(goals));
    }

    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('goal-name').value;
        const amount = document.getElementById('goal-amount').value;
        const date = document.getElementById('goal-date').value;
        addGoal(name, amount, date);
        goalForm.reset();
    });

    renderGoals();
});