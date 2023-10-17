document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseTable = document.getElementById("expense-table");
    const addExpenseButton = document.getElementById("add-expense");
    const calculateSummaryButton = document.getElementById("calculate-summary");
    const summaryDiv = document.getElementById("summary");
    const expenses = [];

    addExpenseButton.addEventListener("click", function () {
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

        if (expenseName && !isNaN(expenseAmount)) {
            expenses.push({ name: expenseName, amount: expenseAmount });
            const row = expenseTable.insertRow();
            const nameCell = row.insertCell(0);
            const amountCell = row.insertCell(1);
            nameCell.innerHTML = expenseName;
            amountCell.innerHTML = expenseAmount;
            document.getElementById("expense-name").value = "";
            document.getElementById("expense-amount").value = "";
        }
    });

    calculateSummaryButton.addEventListener("click", function () {
        const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        const summaryHTML = `
            <h2>Resumo de Gastos</h2>
            <p>Total de Gastos: R$ ${totalExpenses.toFixed(2)}</p>
            <p>Número de Gastos: ${expenses.length}</p>
        `;
        summaryDiv.innerHTML = summaryHTML;
    });
});
