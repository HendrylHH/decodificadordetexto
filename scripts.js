document.getElementById('encryptBtn').addEventListener('click', encryptText);
document.getElementById('decryptBtn').addEventListener('click', decryptText);

function encryptText() {
    let inputText = document.getElementById('inputText').value;
    if (validateText(inputText)) {
        let encryptedText = encrypt(inputText);
        document.getElementById('outputText').innerText = encryptedText;
    } else {
        alert('O texto deve conter apenas letras minúsculas e números.');
    }
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    if (validateText(inputText)) {
        let decryptedText = decrypt(inputText);
        document.getElementById('outputText').innerText = decryptedText;
    } else {
        alert('O texto deve conter apenas letras minúsculas e números.');
    }
}

function validateText(text) {
    const regex = /^[a-z0-9 ]+$/;
    return regex.test(text);
}

function encrypt(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { 
            let shiftedCode = ((charCode - 97 + 13) % 26) + 97;
            encrypted += String.fromCharCode(shiftedCode);
        } else if (charCode >= 48 && charCode <= 57) { 
            encrypted += text[i];
        } else if (charCode === 32) { 
            encrypted += ' ';
        }
    }
    return encrypted;
}

function decrypt(text) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            let shiftedCode = ((charCode - 97 - 13 + 26) % 26) + 97;
            decrypted += String.fromCharCode(shiftedCode);
        } else if (charCode >= 48 && charCode <= 57) { 
            decrypted += text[i];
        } else if (charCode === 32) { 
            decrypted += ' ';
        }
    }
    return decrypted;
}
