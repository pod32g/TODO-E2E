class SignUp {
    userNameInput = '#user-input'
    emailInput = '#email-input'
    passwordInput = '#pass-input'
    loginBtn = '#login-btn'
    title = '#title'

    constructor() { }

    getUserNameInput() {
        return cy.get(this.userNameInput)
    }

    getPasswordInput() {
        return cy.get(this.passwordInput)
    }

    getLoginButton() {
        return cy.get(this.loginBtn)
    }

    getEmailInput() {
        return cy.get(this.emailInput)
    }

    getTitle() {
        return cy.get(this.title)
    }
}

export default SignUp