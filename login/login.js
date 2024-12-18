const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const verificationForm = document.getElementById('verificationForm');
const verifyButton = document.getElementById('verifyButton');
const c = document.getElementById('backButton');
loginButton.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    verificationForm.style.display = 'none';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});
document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'index/index.html'; 
});
registerButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    verificationForm.style.display = 'none';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});

verifyButton.addEventListener('click', () => {
    registerForm.style.display = 'none';
    verificationForm.style.display = 'flex';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});
    
    
document.getElementById('nextButton1').addEventListener('click', function() {
    window.location.href = 'index/index.html'; 
});