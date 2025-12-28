/// <reference types="cypress" />

describe('US-003: API de Cupons', () => {
  
  const baseUrl = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3'
  const auth = {
    username: 'admin_ebac',
    password: '@admin!&b@c!2022'
  }

  let cupomId // Vai guardar o ID do cupom criado

  // ========== TESTES GET ==========
  
  it('CT-001: Deve listar todos os cupons com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/coupons`,
      auth: auth,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
  })

  // ========== TESTES POST ==========

  it('CT-002: Deve cadastrar um cupom com sucesso', () => {
    const codigoCupom = 'CUPOM' + Date.now() // Nome único
    
    cy.request({
      method: 'POST',
      url: `${baseUrl}/coupons`,
      auth: auth,
      body: {
        code: codigoCupom,
        amount: '10',
        discount_type: 'fixed_product',
        description: 'Cupom de teste automatizado'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      // A API converte para minúsculas!
      expect(response.body.code).to.eq(codigoCupom.toLowerCase())
      expect(response.body.amount).to.eq('10.00')
      expect(response.body.discount_type).to.eq('fixed_product')
      
      cupomId = response.body.id // Salva o ID
    })
  })

  it('CT-003: Deve buscar um cupom específico por ID', () => {
    // Primeiro cria um cupom
    const codigoCupom = 'BUSCA' + Date.now()
    
    cy.request({
      method: 'POST',
      url: `${baseUrl}/coupons`,
      auth: auth,
      body: {
        code: codigoCupom,
        amount: '15',
        discount_type: 'fixed_product',
        description: 'Cupom para busca por ID'
      }
    }).then((response) => {
      const id = response.body.id
      
      // Agora busca o cupom pelo ID
      cy.request({
        method: 'GET',
        url: `${baseUrl}/coupons/${id}`,
        auth: auth
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body.id).to.eq(id)
        // A API converte para minúsculas!
        expect(getResponse.body.code).to.eq(codigoCupom.toLowerCase())
      })
    })
  })

  it('CT-004: NÃO deve cadastrar cupom com código duplicado', () => {
    const codigoDuplicado = 'DUPLICADO' + Date.now()
    
    // Cria o primeiro cupom
    cy.request({
      method: 'POST',
      url: `${baseUrl}/coupons`,
      auth: auth,
      body: {
        code: codigoDuplicado,
        amount: '10',
        discount_type: 'fixed_product',
        description: 'Primeiro cupom'
      }
    })
    
    // Tenta criar cupom com mesmo código
    cy.request({
      method: 'POST',
      url: `${baseUrl}/coupons`,
      auth: auth,
      failOnStatusCode: false,
      body: {
        code: codigoDuplicado, // MESMO CÓDIGO
        amount: '20',
        discount_type: 'fixed_product',
        description: 'Tentativa de duplicar'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      // Mensagem exata da API
      expect(response.body.message).to.eq('O código de cupom já existe')
    })
  })

  it('CT-005: NÃO deve cadastrar cupom sem campos obrigatórios', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/coupons`,
      auth: auth,
      failOnStatusCode: false,
      body: {
        // SEM O CAMPO 'code' obrigatório
        amount: '10',
        discount_type: 'fixed_product'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

})