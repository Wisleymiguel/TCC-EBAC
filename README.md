# TCC-EBAC - Testes Automatizados E2E

Projeto de Testes Automatizados desenvolvido como Trabalho de Conclusão de Curso (TCC) para o programa de Engenheiro de Qualidade de Software da EBAC.

## 🎯 Objetivo

Automatizar testes E2E (End-to-End) para a loja virtual EBAC Shop, validando funcionalidades críticas do sistema de e-commerce.


# 🧪 OBSERVAÇÕES SOBRE OS TESTES

## ⚠️ Instabilidade do Ambiente

Os testes automatizados estão **corretos e funcionais**, porém o 
ambiente de testes (lojaebac.ebaconline.art.br) apresenta 
**instabilidade intermitente**.

### Sintomas Observados
- Tempo de resposta inconsistente (2-15 segundos)
- Elementos DOM carregam em momentos diferentes
- Testes passam em execução isolada (`it.only`)
- Testes falham aleatoriamente em sequência

### Mitigações Implementadas
✅ Timeouts aumentados (15 segundos)
✅ Asserções `.should('be.visible')` em elementos críticos
✅ Retry automático (2 tentativas no CI/CD)
✅ Isolamento de testes com `beforeEach()`

### Como Executar

**Modo interativo (recomendado para desenvolvimento):**
```bash


## 🛠️ Tecnologias Utilizadas

- **Cypress 15.8.1** - Framework de testes E2E
- **Mochawesome** - Geração de relatórios HTML
- **Faker.js** - Geração de dados fictícios

## 📋 User Stories Testadas

### US-0001: Adicionar item ao carrinho
- **CT-001:** Adicionar múltiplos produtos e ir até checkout
- **CT-002:** Adicionar 10 unidades (quantidade máxima)
- **CT-003:** Validar limite de 10 itens por produto

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

**Modo headless (sem interface, com vídeo):**
```bash
npm run cy:run
```

**Executar somente US-0001:**
```bash
npm run test:us001
```

## 📊 Resultados

### Casos de Teste
| Caso | Status | Descrição |
|------|--------|-----------|
| CT-001 | ✅ PASSOU | Adiciona produtos ao carrinho com sucesso |
| CT-002 | ✅ PASSOU | Aceita quantidade máxima de 10 unidades |
| CT-003 | ❌ FALHOU | 🐛 **Bug encontrado:** Sistema aceita mais de 10 unidades |

### Bug Identificado
**Descrição:** O sistema não valida o limite máximo de 10 unidades por produto, permitindo adicionar 11 ou mais unidades ao carrinho.

**Severidade:** Alta - Viola regra de negócio crítica

**Evidências:** Disponíveis em `cypress/videos/` e `cypress/screenshots/`

## 📁 Estrutura do Projeto
```
TCC-EBAC/
├── cypress/
│   ├── e2e/
│   │   └── teste.cy.js          # Casos de teste US-0001
│   ├── fixtures/
│   ├── support/
│   └── videos/                   # Vídeos dos testes
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

## 👤 Autor

**Wisley Miguel**  
Aluno - Engenheiro de Qualidade de Software - EBAC  
Progresso: 98% do curso concluído

## 📝 Licença

ISC