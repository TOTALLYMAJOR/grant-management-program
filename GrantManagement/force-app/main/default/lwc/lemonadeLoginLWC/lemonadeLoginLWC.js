import { LightningElement, track } from 'lwc';
import { navigateToPage } from 'lightning/navigation';

export default class LoginLWC extends LightningElement {
    @track email = '';
    @track password = '';
    @track rememberMe = false;
    @track isLoading = false;
    @track loginError = '';

    // Computed property to disable login based on form state
    get isLoginDisabled() {
        return !this.email || !this.password || this.isLoading;
    }

    // Handles input changes for email, password, and checkbox by using dataset property
    handleInputChange(event) {
        const field = event.target.dataset.field;
        if (field === "rememberMe") {
            this[field] = event.target.checked;
        } else {
            this[field] = event.target.value;
        }
    }

    // Handles the login process
    handleLogin() {
        if (this.validateInput()) {
            this.isLoading = true;
            // Simulate server-side authentication
            setTimeout(() => {
                this.isLoading = false;
                if (this.email === "test@example.com" && this.password === "password") {
                    navigateToPage('/home'); // Navigate on successful login
                } else {
                    this.loginError = "Invalid credentials. Please try again.";
                }
            }, 2000);
        }
    }

    // Validates the input fields
    validateInput() {
        if (!this.email.includes('@')) {
            this.loginError = "Please enter a valid email address.";
            return false;
        }
        if (this.password.length < 8) {
            this.loginError = "Password must be at least 8 characters long.";
            return false;
        }
        return true;
    }

    // Additional methods for password recovery and sign up can be added similarly
    handleForgotPassword() {
        // Navigate or implement logic for password recovery
    }

    handleSignUp() {
        // Navigate to the registration page
    }
}

