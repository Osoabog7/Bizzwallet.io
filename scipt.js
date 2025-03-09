document.getElementById("membershipForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        occupation: document.getElementById("occupation").value,
        referral: document.getElementById("referral").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        signature: document.getElementById("signature-data").value,
        date: document.getElementById("date").value,
        guarantorName: document.getElementById("guarantorName").value,
        guarantorAddress: document.getElementById("guarantorAddress").value,
        guarantorOccupation: document.getElementById("guarantorOccupation").value,
        guarantorSignature: document.getElementById("guarantor-signature-data").value,
        guarantorDate: document.getElementById("guarantorDate").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzTk9ShcPQ2nFF73xV7uAgBMHVX75wwNtU1KFlmU-0pxi2E8pGAgINoOIIHkRW4V4s9rQ/exec", { // Replace with your URL
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        alert("Form Submitted Successfully!");
        document.getElementById("membershipForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
