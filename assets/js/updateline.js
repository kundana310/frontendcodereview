// Function to update line numbers based on textarea content
function updateLineNumbers() {
    const codeTextarea = document.getElementById('code');
    const lineNumbersDiv = document.getElementById('line-numbers');

    // Get number of lines in the textarea
    const numLines = codeTextarea.value.split('\n').length;

    // Generate line numbers HTML
    const lineNumbersHTML = Array.from({ length: numLines }, (_, i) => `<div>${i + 1}</div>`).join('');

    // Update line numbers
    lineNumbersDiv.innerHTML = lineNumbersHTML;
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('code').addEventListener('input', updateLineNumbers);
    updateLineNumbers();   
});