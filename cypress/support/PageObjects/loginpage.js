class loginpage {

    getEmail() {
        return cy.get("#gigya-loginID-77152811960799260")
    }

    login() {

        return cy.get("input[value='SIGN IN']")
    }

    getPassword() {
        return cy.get("#gigya-password-116353530441464400")
    }


}

export default loginpage