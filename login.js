document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index.html';
    }

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        
        // Basic validation (just making sure it's not empty, as requested)
        if (usernameInput.trim() !== '' && passwordInput.trim() !== '') {
            // Set login flag
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to main page
            window.location.href = 'index.html';
        } else {
            alert('Please enter both username and password.');
        }
    });
});
