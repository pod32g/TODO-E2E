import Home from '../../../elements/pages/home'

describe("TODO-App Home Screen", () => {
    var noElementTextLogout = 'Please note, this is a Demo session, the TODO notes added here will be lost once you exit the page'
    var filterAllText = 'All'
    var filterPendingText = 'Pending'
    var filterDoneText = 'Done'

    const home = new Home()

    context("User opens Home Screen", () => {
        beforeEach(() => {
            cy.visit('')
        })
        it("Home Screen contains filters", () => {
            home.getFilterAllButton().contains(filterAllText)
            home.getFilterDoneButton().contains(filterDoneText)
            home.getFilterPendingButton().contains(filterPendingText)
        })

        it("Filters should be clickable", () => {
            home.getFilterAllButton().should('not.be.disabled')
            home.getFilterDoneButton().should('not.be.disabled')
            home.getFilterPendingButton().should('not.be.disabled')
        })

        it("Home Screen contains no elements text", () => {
            home.getNoElementsText().contains(noElementTextLogout)
        })

        it("Displays add button", () => {
            var addBtn = home.getAddButton()
            addBtn.should('be.visible')
        })

        it("Add button not disabled", () => {
            home.getAddButton()
                .should('not.be.disabled')
        })
    })
})