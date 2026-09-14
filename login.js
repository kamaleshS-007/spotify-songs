document.addEventListener('DOMContentLoaded', () => {

    // ── If already logged in → go to app ──────────────────────────
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index.html';
        return;
    }

    // ── Elements ───────────────────────────────────────────────────
    const form          = document.getElementById('login-form');
    const emailInput    = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError    = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const emailField    = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const loginBtn      = document.getElementById('login-btn');
    const togglePwBtn   = document.getElementById('toggle-pw');
    const eyeOpen       = document.getElementById('eye-open');
    const eyeClosed     = document.getElementById('eye-closed');

    // ── Show / Hide Password ───────────────────────────────────────
    togglePwBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type  = isPassword ? 'text' : 'password';
        eyeOpen.style.display  = isPassword ? 'none'  : 'block';
        eyeClosed.style.display = isPassword ? 'block' : 'none';
        togglePwBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });

    // ── Helpers: show / clear error ───────────────────────────────
    function showError(field, errorEl, message) {
        field.classList.add('has-error');
        errorEl.textContent = message;
    }

    function clearError(field, errorEl) {
        field.classList.remove('has-error');
        errorEl.textContent = '';
    }

    // ── Clear errors while typing ──────────────────────────────────
    emailInput.addEventListener('input', () => clearError(emailField, emailError));
    passwordInput.addEventListener('input', () => clearError(passwordField, passwordError));

    // ── Email Validation ───────────────────────────────────────────
    function validateEmail() {
        const val = emailInput.value.trim();

        if (val === '') {
            showError(emailField, emailError, 'Please enter your email address or username.');
            return false;
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            // Could be a username (no @) — accept it
            // Only reject if it looks like an email but has wrong domain
            if (val.includes('@')) {
                showError(emailField, emailError, 'Please enter a valid email address.');
                return false;
            }
            // Username without @ — allow it
            clearError(emailField, emailError);
            return true;
        }

        // It's an email — check if domain is Gmail or Outlook
        const domain = val.split('@')[1].toLowerCase();
        const allowedDomains = [
            'gmail.com',
            'outlook.com', 'outlook.in', 'outlook.co.uk',
            'hotmail.com', 'hotmail.in', 'hotmail.co.uk',
            'live.com', 'live.in', 'live.co.uk',
            'msn.com'
        ];

        if (!allowedDomains.includes(domain)) {
            showError(emailField, emailError,
                'Only Gmail or Outlook email addresses are accepted (e.g. name@gmail.com or name@outlook.com).');
            return false;
        }

        clearError(emailField, emailError);
        return true;
    }

    // ── Password Validation ────────────────────────────────────────
    function validatePassword() {
        const val = passwordInput.value;

        if (val === '') {
            showError(passwordField, passwordError, 'Please enter your password.');
            return false;
        }

        if (val.length < 6) {
            showError(passwordField, passwordError, 'Password must be at least 6 characters.');
            return false;
        }

        clearError(passwordField, passwordError);
        return true;
    }

    // ── Form Submit ────────────────────────────────────────────────
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailOk    = validateEmail();
        const passwordOk = validatePassword();

        if (emailOk && passwordOk) {
            // Disable button + show loading state
            loginBtn.disabled    = true;
            loginBtn.textContent = 'Logging in…';
            loginBtn.style.background = '#169c46';

            // Save session
            localStorage.setItem('isLoggedIn', 'true');

            // Brief delay for UX, then redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 700);
        }
    });

    // ── Email blur validation ──────────────────────────────────────
    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() !== '') validateEmail();
    });

});
