import SignUp from '../../../elements/pages/signup'

describe("TODO-App Sign up Screen", () => {


    const signup = new SignUp()

    context("User opens Sign up Screen", () => {
        beforeEach(() => {
            cy.visit('/signup')
        })
        it("Sign up screen displays correct title", () => {
            signup.getTitle().contains('Sign Up')
        })

        it("Sign up screen displays correct inputs", () => {
            signup.getUserNameInput().focus().type('test').blur()
            signup.getPasswordInput().focus().type('test').blur()
            signup.getEmailInput().focus().type('test').blur()
            signup.getLoginButton().contains('Sign up')
        })

        it("Sign up button clickable", () => {
            signup.getLoginButton().should('not.be.disabled')
        })
    })
})