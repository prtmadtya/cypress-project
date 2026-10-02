describe('Validasi Dinamis dari API Reqres', () => {
    beforeEach(() => {
        cy.pause()
    })

    it('Ambil data user dan lakukan validasi berdasarkan nilai', () => {
        cy.request('https://reqres.in/api/users/2').then((response) => {
            //Assert status code 200
            expect(response.status).to.eq(200)
            //Assert bahwa response body memiliki data user dengan id 2
            expect(response.body.data.id).to.eq(2)
            //Assert bahwa response body memiliki data user dengan email "

            const user = response.body.data
            // Kondisi 1 : Jika first_name adalah Janet
            if (user.first_name === 'Janet') {
                //Assert bahwa last_name adalah Weaver
                cy.log('Nama Janet ditemukan dan email sesuai')
            }

            // Kondisi 2 : 
            if(user.id === 2) {
                expect(user.avatar).to.include('2-image.jpg')
                cy.log('ID 2 ditemukan, avatar sesuai')
            }else{
                //Kondisi 3 : Jika ID bukan 2
                cy.log('Unknown user ID : ${user.id}')
                console.warn('Unknown user ID : ${user.id}')
            }
        })

    })

})