import TestData from "../fixtures/test_datas"
import main  from "../pages/main"

let deviceName = '';

describe('Check allergies search functionality', () => { 
    it('Should narrow down allergies options and if they are correct', () => {
        cy.visit('/addUser')
        cy.get(main.allergiesInput).type('an')
        //checks if the all the narrowed down options contain the typed text 'an'
        cy.xpath(main.allergiesOptions).should('contain.text','an')
    })

    it('Verify the correct creation of users via API',() => {
        cy.visit('/')
        main.createUserViaApi(TestData.user)
    })
})