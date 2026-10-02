describe ('Latihan Table', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        //Assert url sudah benar
        cy.url().should('include', '/tables')
    })

    it('Validasi data Tim dengan Due $50.00', () => {
        let ditemukan = 0
        cy.get('#table1 > tbody > tr').each(($row) => {
            const firstName = $row.find('td').eq(1).text().trim()
            const Due = Cypress.$($row).find('td').eq(3).text().trim()

            if (firstName === 'Tim' && Due === '$50.00') {
                ditemukan += 1
            }
        }).then(() => {
            expect(ditemukan, 'Data Tim dengan Due $50.00 tidak ditemukan').to.equal(1)
        })
    })
})