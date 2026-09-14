document.addEventListener('DOMContentLoaded', () => {

    // ── If already logged in, skip to main app ──
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index.html';
        return;
    }

    // ── Elements ──
    const loginForm      = document.getElementById('login-form');
    const emailInput     = document.getElementById('email');
    const passwordInput  = document.getElementById('password');
    const emailError     = document.getElementById('email-error');
    const passwordError  = document.getElementById('password-error');
    const togglePassword = document.getElementById('toggle-password');
    const eyeIcon        = document.getElementById('eye-icon');

    // ── Toggle password visibility ──
    togglePassword.addEventListener('click', () => {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';
        eyeIcon.className  = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
    });

    // ── Real-time email validation (on blur) ──
    emailInput.addEventListener('blur', () => validateEmail());
    emailInput.addEventListener('input', () => {
        // clear error while typing after a previous submit
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    });

    passwordInput.addEventListener('input', () => {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    });

    // ── Email validation helper ──
    function validateEmail() {
        const val = emailInput.value.trim();

        if (val === '') {
            setError(emailInput, emailError, 'Email address is required.');
            return false;
        }

        // Must be a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            setError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }

        // Must be Gmail or Outlook domain only
        const domain = val.split('@')[1].toLowerCase();
        const allowedDomains = [
            'gmail.com',
            'outlook.com',
            'outlook.in',
            'outlook.co.uk',
            'hotmail.com',
            'hotmail.in',
            'live.com'
        ];

        if (!allowedDomains.includes(domain)) {
            setError(emailInput, emailError, 'Only Gmail or Outlook email addresses are accepted.');
            return false;
        }

        clearError(emailInput, emailError);
        return true;
    }

    function validatePassword() {
        const val = passwordInput.value;
        if (val === '') {
            setError(passwordInput, passwordError, 'Password is required.');
            return false;
        }
        if (val.length < 6) {
            setError(passwordInput, passwordError, 'Password must be at least 6 characters.');
            return false;
        }
        clearError(passwordInput, passwordError);
        return true;
    }

    function setError(input, errorEl, message) {
        input.classList.add('input-error');
        errorEl.textContent = message;
    }

    function clearError(input, errorEl) {
        input.classList.remove('input-error');
        errorEl.textContent = '';
    }

    // ── Form submit ──
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValid    = validateEmail();
        const passwordValid = validatePassword();

        if (emailValid && passwordValid) {
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            // Animate button before redirect
            const btn = document.getElementById('login-submit-btn');
            btn.textContent = '✓ Logging in…';
            btn.style.background = '#169c46';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 600);
        }
    });

});
