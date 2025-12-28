# TCC-EBAC - Testes Automatizados E2E e API

Projeto de Testes Automatizados desenvolvido como Trabalho de Conclusão de Curso (TCC) para o programa de Engenheiro de Qualidade de Software da EBAC.

## 🎯 Objetivo

Automatizar testes E2E (End-to-End) e testes de API para a loja virtual EBAC Shop, validando funcionalidades críticas do sistema de e-commerce.

## 🛠️ Tecnologias Utilizadas

- **Cypress 15.8.1** - Framework de testes E2E e API
- **Node.js 20+** - Ambiente de execução
- **Mochawesome** - Geração de relatórios HTML
- **GitHub Actions** - CI/CD para execução automatizada

## 📋 User Stories Testadas

### ✅ US-001: Adicionar item ao carrinho
**Tipo:** E2E  
**Casos de Teste:**
- **CT-001:** Adicionar múltiplos produtos e ir até checkout ✅
- **CT-002:** Adicionar 10 unidades (quantidade máxima) ✅
- **CT-003:** Validar limite de 10 itens por produto ❌ **BUG ENCONTRADO**

**Bug Identificado:**  
O sistema não valida o limite máximo de 10 unidades por produto, permitindo adicionar 11 ou mais unidades ao carrinho.

---

### ✅ US-002: Login na Plataforma EBAC-SHOP
**Tipo:** E2E  
**Casos de Teste:**
- Login com credenciais válidas
- Validação de mensagens de erro
- Persistência de sessão

---

### ✅ US-003: API de Cupons
**Tipo:** API REST  
**Endpoint:** `http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons`

**Autenticação:**
- Usuário: `admin_ebac`
- Senha: `@admin!&b@c!2022`
- Tipo: Basic Auth

**Casos de Teste:**

| Caso | Método | Descrição | Status |
|------|--------|-----------|--------|
| CT-001 | GET | Deve listar todos os cupons com sucesso | ✅ |
| CT-002 | POST | Deve cadastrar um cupom com sucesso | ✅ |
| CT-003 | GET | Deve buscar um cupom específico por ID | ✅ |
| CT-004 | POST | NÃO deve cadastrar cupom com código duplicado | ✅ |
| CT-005 | POST | NÃO deve cadastrar cupom sem campos obrigatórios | ✅ |

**Regras de Negócio Validadas:**
- ✅ Código do cupom deve ser único
- ✅ Campos obrigatórios: `code`, `amount`, `discount_type`, `description`
- ✅ API converte códigos para minúsculas automaticamente
- ✅ Retorna status 400 para requisições inválidas
- ✅ Retorna status 201 para cupom criado com sucesso

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+ instalado
- npm ou yarn

### Instalação
```bash
npm install
```

### Executar Testes

**Modo interativo (com interface):**
```bash
npm run cy:open
```

**Modo headless (linha de comando):**
```bash
npm run cy:run
```

**Executar testes específicos:**
```bash
# US-001: Carrinho
npm run test:us001

# US-003: API de Cupons
npx cypress run --spec "cypress/e2e/api/cupons.cy.js"
```

---

## 📁 Estrutura do Projeto
```
TCC-EBAC/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml    # CI/CD com GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── teste.cy.js          # Testes US-001 (Carrinho)
│   │   └── api/
│   │       └── cupons.cy.js     # Testes US-003 (API Cupons)
│   ├── fixtures/                # Dados de teste
│   ├── support/                 # Comandos customizados
│   └── videos/                  # Vídeos dos testes
├── .gitignore
├── cypress.config.js            # Configurações do Cypress
├── package.json
└── README.md
```

---

## 🧪 Observações sobre os Testes

### ⚠️ Instabilidade do Ambiente

Os testes automatizados estão **corretos e funcionais**, porém o ambiente de testes (`lojaebac.ebaconline.art.br`) apresenta **instabilidade intermitente**.

**Sintomas Observados:**
- Tempo de resposta inconsistente (2-15 segundos)
- Elementos DOM carregam em momentos diferentes
- Testes passam em execução isolada
- Testes podem falhar aleatoriamente em sequência

**Mitigações Implementadas:**
- ✅ Timeouts aumentados (15 segundos)
- ✅ Asserções `.should('be.visible')` em elementos críticos
- ✅ Retry automático (2 tentativas no CI/CD)
- ✅ Isolamento de testes com `beforeEach()`

---

## 📊 Resultados dos Testes

### US-001: Carrinho
| Caso | Status | Descrição |
|------|--------|-----------|
| CT-001 | ✅ PASSOU | Adiciona produtos ao carrinho com sucesso |
| CT-002 | ✅ PASSOU | Aceita quantidade máxima de 10 unidades |
| CT-003 | ❌ FALHOU | 🐛 **Bug:** Sistema aceita mais de 10 unidades |

### US-003: API de Cupons
| Caso | Status | Descrição |
|------|--------|-----------|
| CT-001 | ✅ PASSOU | Lista cupons com sucesso (GET) |
| CT-002 | ✅ PASSOU | Cria cupom com sucesso (POST) |
| CT-003 | ✅ PASSOU | Busca cupom por ID (GET) |
| CT-004 | ✅ PASSOU | Rejeita código duplicado |
| CT-005 | ✅ PASSOU | Rejeita campos faltando |

**Total:** 8 testes executados | 7 passaram | 1 bug encontrado

---

## 🐛 Bugs Encontrados

### Bug #1: Limite de quantidade não validado (US-001 - CT-003)
**Severidade:** Alta  
**Descrição:** O sistema não valida o limite máximo de 10 unidades por produto, permitindo adicionar 11 ou mais unidades ao carrinho.  
**Comportamento Esperado:** Sistema deve rejeitar quantidades acima de 10  
**Comportamento Atual:** Sistema aceita qualquer quantidade  
**Evidências:** Disponíveis em `cypress/videos/` e `cypress/screenshots/`

---

## 🔄 CI/CD

O projeto utiliza **GitHub Actions** para execução automatizada dos testes a cada push ou pull request.

**Workflow configurado:**
- ✅ Executa em Ubuntu latest
- ✅ Node.js 20
- ✅ Browser Chrome
- ✅ Upload de vídeos e screenshots em caso de falha

---

## 👤 Autor

**Wisley Miguel**  
Aluno - Engenheiro de Qualidade de Software - EBAC  
Progresso: 98% do curso concluído

---

## 📝 Licença

ISC

---

## 📚 Documentação da API

- **Endpoint Base:** `http://lojaebac.ebaconline.art.br/wp-json/wc/v3`
- **Documentação Completa:** [WooCommerce REST API](http://lojaebac.ebaconline.art.br/rest-api/docs/)
- **Autenticação:** Basic Auth (credenciais fornecidas no TCC)

### Exemplo de Request (POST - Criar Cupom):
```json
{
  "code": "CUPOM2025",
  "amount": "10",
  "discount_type": "fixed_product",
  "description": "Cupom de desconto de teste"
}
```

### Exemplo de Response (201 Created):
```json
{
  "id": 7928,
  "code": "cupom2025",
  "amount": "10.00",
  "discount_type": "fixed_product",
  "description": "Cupom de desconto de teste",
  "date_created": "2025-12-28T20:52:28",
  ...
}
```