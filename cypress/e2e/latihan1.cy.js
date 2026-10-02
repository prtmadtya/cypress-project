describe('Latihan 1', () => { 
    it('Latihan untuk testing web dummy', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('equal', 'Cypress.io: Kitchen Sink')

        //Cek apakah input name ada dan memiliki placeholder "Enter your name"
        cy.get('input[placeholder="Enter your name"]').should('have.attr', 'placeholder', 'Enter your name')
        
        //Klik pada Checkbox 1 dan checkbox 2, abaikan checbox yang disable
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')
        
        //Click button Submit
        if (cy.get('.action-form [type="submit"]').should('be.visible')) {
            //Jika Sudah ketemu klik tombol submit
            cy.get('.action-form [type="submit"]').click()
                //Jika tombol submit di klik, maka akan muncul alert dengan text "Your form has been submitted!"
                cy.on('window:alert', (str) => {
                    expect(str).to.equal('Your form has been submitted!')
                })
        }
    })

    it('Latihan Upload File', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        //Assert url sudah benar
        cy.url().should('include', '/upload')

        //Upload file dengan selectFile
        cy.get('#file-upload').selectFile('cypress/fixtures/Dummy File/Dummy.pdf')
        
        //Jika sudah diupload assert bahwa file sudah diupload
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain.text', 'Dummy.pdf')

            //Jika file sudah diupload, maka akan muncul text "File Uploaded!"
            cy.get('h3').should('contain.text', 'File Uploaded!')           

    })
})