import Login from '../../../elements/pages/login'

describe("TODO-App Login Screen", () => {


    const login = new Login()

    context("User opens Login Screen", () => {
        beforeEach(() => {
            cy.visit('/login')
        })
        it("Login screen displays correct title", () => {
            login.getTitle().contains('Login')
        })

        it("Login screen displays correct inputs", () => {
            login.getUserNameInput().focus().type('test').blur()
            login.getPasswordInput().focus().type('test').blur()
            login.getLoginButton().contains('Login')
        })

        it("Login button clickable", () => {
            login.getLoginButton().should('not.be.disabled')
        })
    })
})