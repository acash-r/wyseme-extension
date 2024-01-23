function fetchData() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    const apiUrl = 'https://f9489bea-6a64-4fa0-8c31-189eb4873722.mock.pstmn.io/get-customer-level/';
    const customerEmail = document.querySelector('.nector-customer-email').textContent.trim();
    const customerPhone = document.querySelector('.nector-customer-phone').textContent.trim();

    // Get spending value from hidden span element
    const spendingValue = parseFloat(document.querySelector('.spending-value').textContent.trim());
    const wyseptsSpan = document.getElementById('wysepts');
    const requestData = {
        price: spendingValue
    };
    if (customerEmail) {
        requestData.email = customerEmail;
    }

    if (customerPhone) {
        requestData.phone = customerPhone;
    }
    console.log(requestData)

    // Make a POST request to the API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the data from the API
            if (wyseptsSpan) {
                wyseptsSpan.textContent = data['wyse-pts'];
            }
            // You can update the HTML content or perform other actions with the data here
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



// window.addEventListener('load', fetchData);

