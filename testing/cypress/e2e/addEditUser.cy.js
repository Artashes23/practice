import TestData from "../fixtures/test_datas"
import main from "../pages/main";


describe('Add and edit user', () => { 
    it('Should added users data reflect in ui',() => {
        const firstThreeAllergies = Object.values(TestData.allergiesObject).slice(0, 3);
        const secondThreeAllergies = Object.values(TestData.allergiesObject).slice(3, 6);
        // add and verify added data
        cy.visit('/')
        cy.get(main.addUserBtn).click()
        cy.get(main.usernameField).type(TestData.username)
        cy.get(main.emailField).type(TestData.email)
        cy.get(main.phoneField).type(TestData.phoneNumber)
        cy.get(main.allergiesInput).click()
        for (const value of firstThreeAllergies) {
            cy.xpath(main.allergiesOption(value)).click()
        }
        cy.get(main.saveBtn).click()
        cy.wait(200)
        cy.xpath(main.userName).last().should('have.text',TestData.username)
        cy.xpath(main.usersEmail).last().should('have.text',TestData.email)
        cy.xpath(main.usersPhone).last().should('have.text',TestData.phoneNumber)
        for (const value of firstThreeAllergies) {
            cy.xpath(main.selectedAllergies(value)).last().should('be.visible')
        }
        // edit and verify edted data
        cy.get(main.editIcon).last().click()
        cy.xpath(main.changeEmail).last().click()
        cy.xpath(main.onlyInput).clear().type(TestData.editedEmail)
        cy.xpath(main.updateSaveBtn).click()
        cy.get(main.editIcon).last().click()
        cy.xpath(main.changePhone).last().click()
        cy.xpath(main.onlyInput).clear().type(TestData.editedPhone)
        cy.xpath(main.updateSaveBtn).click()
        cy.get(main.editIcon).last().click()
        cy.xpath(main.changeAllergies).last().click()
        cy.xpath(main.onlyInput).click()
        for (const value of secondThreeAllergies) {
            cy.xpath(main.allergiesOption(value)).click()
        }
        cy.get(main.arrowOpenInput).click()
        cy.xpath(main.updateSaveBtn).click()
        cy.xpath(main.usersEmail).last().should('have.text',TestData.editedEmail)
        cy.xpath(main.usersPhone).last().should('have.text',TestData.editedPhone)
        for (const value of secondThreeAllergies) {
            cy.xpath(main.selectedAllergies(value)).last().should('be.visible')
        }
    })
})

