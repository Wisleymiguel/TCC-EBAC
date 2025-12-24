describe('US-0002: ', () => {
  
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/')
  })





it('CT-001: Deve fazer login (Caminho Feliz )', () => {
  cy.get('.icon-user-unfollow').click()
  //existe login
  cy.get('#tbay-main-content').should('contain', 'Login')
  //login
  cy.get('[name="username"]').type('wisley.teste@teste.com.br')
  //senha (o mesmo que login)
  cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('wisley.teste@teste.com.br')
  //entrar
  cy.get('[name="login"]').click()
  // verifica se existe minha conta e protudos 
  cy.get('#main').should('contain', 'Minha conta')
  cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
  cy.get('.page-title').should('contain', 'Pedidos')

})

it('CT-002: Deve exibir mensagem de erro com credenciais inválidas', () => {
  cy.get('.icon-user-unfollow').click()
  cy.get('#tbay-main-content').should('contain', 'Login')
  //login (ERRADO)
  cy.get('[name="username"]').type('wisley.1234')
  //senha (CERTA )
  cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('wisley.teste@teste.com.br')
  cy.get('[name="login"]').click()
  //mensagem de erro 
  cy.get('.woocommerce-error').should('contain','Erro: O usuário')

  
})
it('CT-003: Deve bloquear conta após 3 tentativas incorretas de senha', () => {
  cy.get('.icon-user-unfollow').click()
  cy.get('#tbay-main-content').should('contain', 'Login')
  //login (ERRADO)
  cy.get('[name="username"]').type('wisley.1234')
  //senha (CERTA )
  cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('wisley.teste@teste.com.br')
  cy.get('[name="login"]').click()
  //mensagem de erro 
  cy.get('.woocommerce-error').should('contain','Erro: O usuário')
  
  // segunda tentativa:
  cy.get('[name="username"]').clear().type('wisley.1234')
  cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('wisley.teste@teste.com.br')
  cy.get('[name="login"]').click()
  cy.get('.woocommerce-error').should('contain','Erro: O usuário')

  // terceira tentativa:
  cy.get('[name="username"]').clear().type('wisley.1234')
  cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('wisley.teste@teste.com.br')
  cy.get('[name="login"]').click()
  cy.get('.woocommerce-error').should('contain','Erro: O usuário')


});
}) 