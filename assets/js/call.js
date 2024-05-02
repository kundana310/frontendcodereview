async function submitForm() {
    // Show loading screen
    showLoadingScreen();

    var code = document.getElementById('code').value;
    const dataOutput = document.getElementById('output');
    
    try {
        const res = await fetch('http://127.0.0.1:8000/getcodereview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code})
        });
        const data = await res.json();
        // Hide loading screen
        hideLoadingScreen();
        dataOutput.innerText = data.output;
    } catch (error) {
        console.error('Error:', error);
        // Hide loading screen in case of error
        hideLoadingScreen();
        // Handle error
        dataOutput.innerText = "An error occurred while processing the request.";
    }
}

function showLoadingScreen() {
    const loadingContainer = document.getElementById('loading-c');
    loadingContainer.id = 'loading-container';
    if (loadingContainer) {
        loadingContainer.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.id = 'loading-c';
    if (loadingContainer) {
        loadingContainer.classList.add('hidden');
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const submitButton = document.getElementById('submitButt');
    submitButton.addEventListener('click', submitForm)    
});