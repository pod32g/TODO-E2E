class Login {
    userNameInput = '#user-input'
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

    getTitle() {
        return cy.get(this.title)
    }
}

export default Login;