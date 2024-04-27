async function submitForm() {
    var code = document.getElementById('code').value;
    const res = await fetch('http://127.0.0.1:8000/getcodereview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({code})
    });
    const data = await res.json();
    dataOutput.innerText = data.output;
}

const submitButton = document.getElementById('submitButt');
const dataOutput = document.getElementById('output');

submitButton.addEventListener('click',submitForm)
