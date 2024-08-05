describe('Testes das funcionalidades da aplicaçâo', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Deve adicionar um contato à lista', () => {
        cy.get('input[type="text"]').type('cristiano molon')
        cy.get('input[type="email"]').type('exemplo@testmail.com')
        cy.get('input[type="tel"]').type('987654321')
        cy.get('.adicionar').click()
    })
    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="tel"]').clear().type('123456789')
        cy.get('.alterar').click()
    })
    it('Deve deletar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})