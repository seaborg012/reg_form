document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let terms = document.getElementById('terms').checked;

    // Validate date of birth
    let dobDate = new Date(dob);
    let age = new Date().getFullYear() - dobDate.getFullYear();
    if (new Date() < new Date(dobDate.setFullYear(dobDate.getFullYear() + age))) {
        age--;
    }

    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old.');
        return;
    }

    if (!terms) {
        alert('You must accept the terms and conditions.');
        return;
    }

    // Add to table
    let table = document.querySelector('table tbody');
    let row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = password;
    row.insertCell(3).textContent = dob;
    row.insertCell(4).textContent = terms ? 'Yes' : 'No';

    // Clear the form
    document.getElementById('registrationForm').reset();
});
