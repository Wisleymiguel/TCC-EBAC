describe('template spec', () => {
  it('CT-001: Adicionar múltiplos produtos e ir até checkout', () => {
    //Escolhendo a primeiras roupas
    //Maximo 10, valor entre 200 a 600 R$ 
     cy.visit('/product/teton-pullover-hoodie/')
     cy.get('.button-variable-item-XS').click()
     cy.get('.button-variable-item-Purple').click()
     cy.get('.plus').click()
     cy.get('.single_add_to_cart_button').click()
     //escolhendo a segunda 
      cy.visit('/product/ajax-full-zip-sweatshirt/')
     cy.get('.button-variable-item-XS').click()
     cy.get('.button-variable-item-Green').click()
     cy.get('.plus').click()
     cy.get('.single_add_to_cart_button').click()
     // indo para o carrinho 
     cy.get('.woocommerce-message > .button').click()
    // finalizando compra 
    cy.get('.checkout-button').click()
    cy.url().should('include', '/checkout')

  })

  it('CT-002: Adicionar 10 unidades (quantidade máxima)', () => {
  cy.visit('http://lojaebac.ebaconline.art.br/produto/teton-pullover-hoodie/')
  
  cy.get('.button-variable-item-XS').click()
  cy.get('.button-variable-item-Purple').click()
  
  // Limpa e digita 10 direto no campo
  cy.get('input.qty').clear().type('10')
  
  // Valida que aceitou 10
  cy.get('input.qty').should('have.value', '10')
  
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message').should('be.visible')
  //indo para o carrinho 
  cy.get('.woocommerce-message > .button').click()
  cy.get('.checkout-button').click()
  
  cy.url().should('include', '/checkout')
  cy.get('.order-total > td').should('contain', 'R$700,00')
  cy.get('.top-cart-wishlist').should('contain', 'R$700,00')
})



it('CT-003: Deve bloquear adição de mais de 10 unidades', () => {
  // 1. Vai no produto
  cy.visit('http://lojaebac.ebaconline.art.br/produto/teton-pullover-hoodie/')
  
  // 2. Seleciona variações e tamanho 
  cy.get('.button-variable-item-XS').click()
  cy.get('.button-variable-item-Purple').click()
  // 4. ✅ VALIDAÇÃO 2: Tenta digitar 11
  cy.get('input.qty').clear().type('11')
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message > .button').click()
  cy.get('.checkout-button').click()
  // indo para checkout
  cy.url().should('include', '/checkout')
  //mostar que o sitema acita acima de 10 itens 
  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '11')
})
}) 


