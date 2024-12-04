class Main {        
        // locators
        usernameField = '[name="name"]'
        emailField = '[name="email"]'
        phoneField = '[name="phone"]'
        allergiesInput = 'input[placeholder="Favorites"]'
        saveBtn = 'button[type="submit"]'
        addUserBtn = 'a[href="/addUser"] > button'
        allergiesOption = (option) => `//li[contains(.,'${option}')]`
        allergiesOptions = `//ul/li`
        usersEmail = "//span[text() = 'Email: ']/following-sibling::span"
        usersPhone = "//span[text() = 'Phone: ']/following-sibling::span"
        userName = "//*[@data-testid='AccountCircleIcon']/following-sibling::div"
        selectedAllergies = (allergie) => `//span[text() = 'Allergies: ']/parent::div/div/span[text() = '${allergie}']`
        editIcon = '[data-testid="CreateIcon"]'
        changeEmail = "//li[text() = 'Change email']"
        changePhone = "//li[text() = 'Change phone']"
        changeAllergies = "//li[text() = 'Change allergies']"
        onlyInput = "//input"
        updateSaveBtn = "//button[text() = 'Save']"
        arrowOpenInput = '[data-testid="ArrowDropDownIcon"]'


        createUserViaApi(userData) {
                cy.request({
                        method: 'POST',
                        url: 'http://localhost:5173/addUser',
                        body: {
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone,
                        allergies: userData.allergies,
                },
                headers: {
                        'Content-Type': 'application/json',
                },
                }).then((response) => {
                        expect(response.status).to.eq(201);
                        expect(response.body).to.have.property('name', userData.name);
                        expect(response.body).to.have.property('email', userData.email);
                        expect(response.body).to.have.property('phone', userData.phone);
                        expect(response.body.allergies).to.deep.eq(userData.allergies);
                });
      }
      
}

module.exports = new Main();