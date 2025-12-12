// Categories to populate the drop-down
const categories = ["Electronics", "Books", "Clothing", "Home", "Garden"];

// Conditions to populate as radio buttons
const conditions = ["New", "Used", "Refurbished"];

// Populate drop-down
const dropdown = document.getElementById("categoryDropdown");
if (dropdown) {
    categories.forEach(category => {
        const option = document.createElement("option");
        option.text = category;
        option.value = category.toLowerCase();
        dropdown.add(option);
    });
}

// Populate radio buttons
const radioContainer = document.getElementById("conditionRadios");
if (radioContainer) {
    conditions.forEach(condition => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "condition";
        radio.value = condition.toLowerCase();
        label.appendChild(radio);
        label.appendChild(document.createTextNode(condition));
        radioContainer.appendChild(label);
    });
}

// Form submission to add product to table
const form = document.getElementById("productForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tableBody = document.getElementById("productTable")?.getElementsByTagName('tbody')[0];
        if (!tableBody) return;

        const newRow = tableBody.insertRow();

        // Insert cells in correct order: Name, Category, Condition, Price
        const nameCell = newRow.insertCell(0);
        const categoryCell = newRow.insertCell(1);
        const conditionCell = newRow.insertCell(2);
        const priceCell = newRow.insertCell(3);

        const productNameInput = document.getElementById("productName");
        const productName = productNameInput ? productNameInput.value.trim() : '';

        const selectedCategory = dropdown?.options[dropdown.selectedIndex].text || '';
        const selectedConditionInput = document.querySelector('input[name="condition"]:checked');
        const selectedCondition = selectedConditionInput ? selectedConditionInput.parentNode.textContent.trim() : '';

        // Random price between $0 and $100
        const price = (Math.random() * 100).toFixed(2);

        nameCell.innerText = productName;
        categoryCell.innerText = selectedCategory;
        conditionCell.innerText = selectedCondition;
        priceCell.innerText = `$${price}`;

        // Random background color (always 6-digit hex)
        newRow.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        // Optional: reset the form after adding a product
        form.reset();
    });
}

// Feedback form 
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const feedbackInput = document.getElementById("feedbackInput");
        const feedback = feedbackInput ? feedbackInput.value.trim() : '';
        if (feedback) {
            alert(`Thank you for your feedback: "${feedback}"`);
            feedbackForm.reset();
        }
    });
}

// Add a message under the table that displays:

const messageDiv = document.getElementById("messageDiv");
if (form && messageDiv) {
    form.addEventListener("submit", function () {
        messageDiv.textContent = "Product added successfully!";
    });
}
// Reset table and form
const resetButton = document.getElementById("resetButton");
if (resetButton) {
    resetButton.addEventListener("click", function () {
        form?.reset();
        const tableBody = document.getElementById("productTable")?.getElementsByTagName('tbody')[0];
        if (tableBody) tableBody.innerHTML = "";
    });
}

// Clear only the form
const clearButton = document.getElementById("clearButton");
if (clearButton) {
    clearButton.addEventListener("click", function () {
        form?.reset();
    });
}
