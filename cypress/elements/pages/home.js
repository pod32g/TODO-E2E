class Home {
    filterAllBtn = '#filter-all > .MuiToggleButton-label'
    filterPendingBtn = '#filter-pending > .MuiToggleButton-label'
    filterDoneBtn = '#filter-done > .MuiToggleButton-label'
    addBtn = '#add-btn'
    noElementsText = '#no-elements-text'

    constructor() { }


    getFilterAllButton() {
        return cy.get(this.filterAllBtn)
    }

    getFilterPendingButton() {
        return cy.get(this.filterPendingBtn)
    }

    getFilterDoneButton() {
        return cy.get(this.filterDoneBtn)
    }

    getAddButton() {
        return cy.get(this.addBtn)
    }

    getNoElementsText() {
        return cy.get(this.noElementsText)
    }
}

export default Home;