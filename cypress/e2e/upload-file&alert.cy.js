describe('Upload File', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //Assert url sudah benar
        cy.url().should('include', '/javascript_alerts')
    })

    it('Validasi Alert', () => {
        //Klik tombol JS Alert
        cy.get('button[onclick="jsAlert()"]').click()
        //Assert bahwa alert muncul dengan text "I am a JS Alert"
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        //Assert bahwa alert sudah diaccept dan muncul text "You successfully clicked an alert"        
        cy.get('#result').should('contain.text', 'You successfully clicked an alert')
    })

    it('Validasi Confirm', () => {
        //Klik tombol JS Confirm
        cy.get('button[onclick="jsConfirm()"]').click()
        //Assert bahwa confirm muncul dengan text "I am a JS Confirm"
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })
        //Assert bahwa confirm sudah diaccept dan muncul text "You clicked: Ok"        
        cy.get('#result').should('contain.text', 'You clicked: Ok')
    })

    it('Validasi Prompt', () => {
        //Klik tombol JS Prompt
        cy.get('button[onclick="jsPrompt()"]').click()
        //Assert bahwa prompt muncul dengan text "I am a JS prompt"
        cy.on('window:prompt', (str) => {
            expect(str).to.equal('I am a JS prompt')
        })
        //Masukkan text "Cypress" pada prompt
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress')
        })
        //Assert bahwa prompt sudah diaccept dan muncul text "You entered: Cypress"
        cy.get('#result').should('contain.text', 'You entered: null')

    })

})