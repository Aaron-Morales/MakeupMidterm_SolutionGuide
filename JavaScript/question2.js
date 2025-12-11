// Categories to populate the drop-down
let categories = ["Electronics", "Books", "Clothing", "Home", "Garden"];

// Conditions to populate as radio buttons
let conditions = ["New", "Used", "Refurbished"];

// TODO: Populate drop-down
let dropdown = document.getElementById("categoryDropdown");
categories.forEach(category => {
    let option = document.createElement("option");
    option.text = category;
    option.value = category.toLowerCase();
    dropdown.add(option);
});

// TODO: Populate radio buttons
let radioContainer = document.getElementById("conditionRadios");
conditions.forEach(condition => {
    let label = document.createElement("label");
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "condition";
    radio.value = condition.toLowerCase();
    label.appendChild(radio);
    label.appendChild(document.createTextNode(condition));
    radioContainer.appendChild(label);
});

// TODO: Add form event listener
let form = document.getElementById("productForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Insert table rows
    let table = document.getElementById("productTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    // TODO: Random formatting (background colors, text, etc.)
    let categoryCell = newRow.insertCell(0);
    let conditionCell = newRow.insertCell(1);
    let priceCell = newRow.insertCell(2);
    let price = (Math.random() * 100).toFixed(2); // Random price between 0 and 100

    categoryCell.innerText = dropdown.options[dropdown.selectedIndex].text;
    conditionCell.innerText = document.querySelector('input[name="condition"]:checked').nextSibling.nodeValue;
    priceCell.innerText = `$${price}`;
    newRow.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random background color
});

// User Feedback
let feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    alert(`Thank you for your feedback: "${feedback}"`);
    feedbackForm.reset();
});

// Reset Functionality
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    document.getElementById("productForm").reset();
    let tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear all rows
});

// Clear Form
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
    document.getElementById("productForm").reset();
});