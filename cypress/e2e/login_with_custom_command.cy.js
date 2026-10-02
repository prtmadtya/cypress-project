describe('Login with Custom Command', () => {
    beforeEach(() => {
        cy.fixture('users_saucelabs').as('users')
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login with valid user', function () {
        cy.login(this.users.valid.username, this.users.valid.password)

        //Assert bahwa login berhasil dengan memeriksa URL
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('contain.text', 'Products')
    })

    it('Login with invalid user', function () {
        cy.login(this.users.invalid.username, this.users.invalid.password)

        //Assert bahwa login gagal dengan memeriksa pesan error
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Login with locked user', function () {
        cy.login(this.users.locked.username, this.users.locked.password)
        //Assert bahwa login gagal dengan memeriksa pesan error
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
})