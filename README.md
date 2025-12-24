# 🎓 TCC - Testes Automatizados E2E - EBAC

## 📌 Informações do Projeto

**Curso:** Engenheiro de Qualidade de Software  
**Instituição:** EBAC (Escola Britânica de Artes Criativas e Tecnologia)  
**Aluno:** Wisley Miguel  
**Projeto:** Trabalho de Conclusão de Curso (TCC)  
**Plataforma Testada:** EBAC-SHOP (E-commerce)  

---

## 📖 Sobre o Projeto

Este projeto contém a automação de testes end-to-end (E2E) para a plataforma EBAC-SHOP, utilizando **Cypress** como framework principal. O objetivo é validar as principais funcionalidades do sistema através de testes automatizados.

---

## 🎯 User Stories Implementadas

### ✅ US-001: Funcionalidade de Produtos
- Adicionar produtos ao carrinho
- Validação de quantidades
- Cálculo de subtotais

### ✅ US-002: Login na Plataforma
- Login com credenciais válidas (Happy Path)
- Validação de credenciais inválidas
- Bloqueio após 3 tentativas incorretas
- [Documentação Completa da US002](./README_US002.md)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Cypress** | 15.8.1 | Framework de testes E2E |
| **JavaScript** | ES6+ | Linguagem de programação |
| **Node.js** | 20.x | Ambiente de execução |
| **Mochawesome** | 7.1.4 | Geração de relatórios |
| **Faker.js** | 10.1.0 | Geração de dados fictícios |
| **GitHub Actions** | - | CI/CD |

---

## 📁 Estrutura do Projeto

```
TCC-EBAC/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml    # Pipeline CI/CD
├── cypress/
│   ├── e2e/
│   │   └── teste.cy.js          # Testes automatizados
│   ├── fixtures/
│   │   └── usuarios.json        # Dados de teste
│   ├── screenshots/             # Evidências de falhas
│   ├── videos/                  # Gravações dos testes
│   └── support/
│       ├── commands.js          # Comandos customizados
│       └── e2e.js               # Configurações globais
├── node_modules/                # Dependências
├── .gitignore                   # Arquivos ignorados
├── cypress.config.js            # Configurações do Cypress
├── package.json                 # Dependências do projeto
├── package-lock.json            # Lock de versões
├── README.md                    # Este arquivo
└── README_US002.md              # Documentação US002
```

---

## 🚀 Como Executar o Projeto

### **Pré-requisitos**

- Node.js 20.x ou superior
- npm ou yarn
- Git

### **1. Clonar o Repositório**

```bash
git clone https://github.com/Wisleymiguel/TCC-Ebac.git
cd TCC-Ebac
```

### **2. Instalar Dependências**

```bash
npm install
```

### **3. Executar Testes**

**Modo Interativo (Cypress UI):**
```bash
npm run cy:open
```

**Modo Headless (Terminal):**
```bash
npm run cy:run
```

**Executar US002 específica:**
```bash
npm run test:us002
```

**Com vídeo:**
```bash
npm run test:video
```

**Sem vídeo:**
```bash
npm run test:no-video
```

---

## 📊 Resultados dos Testes

### Status Geral

| User Story | Cenários | Passou | Falhou | Taxa |
|-----------|----------|--------|--------|------|
| US-001 | 3 | 3 | 0 | 100% |
| US-002 | 3 | 2 | 1* | 66% |
| **Total** | **6** | **5** | **1** | **83%** |

*Bug identificado no CT-003 (bloqueio não implementado)

---

## 🐛 Bugs Identificados

### BUG-US002-001: Sistema não bloqueia após 3 tentativas

**Severidade:** 🔴 ALTA  
**Status:** Aberto  
**Descrição:** O sistema não implementa o bloqueio de conta após 3 tentativas incorretas de senha.

**Regra Violada:**  
> "Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login"

**Impacto:**  
- Falha crítica de segurança
- Permite ataques de força bruta
- Violação de requisito funcional

[Ver documentação completa](./README_US002.md#-bugs-identificados)

---

## 📈 CI/CD - GitHub Actions

O projeto possui pipeline automatizado que:

✅ Executa em toda push na branch `main`  
✅ Executa em todos os Pull Requests  
✅ Roda os testes no Chrome  
✅ Gera vídeos e screenshots  
✅ Armazena evidências como artifacts  

[Ver workflow](./.github/workflows/cypress-tests.yml)

---

## 📝 Scripts Disponíveis

```json
{
  "cy:open": "Abre interface do Cypress",
  "cy:run": "Executa testes em modo headless",
  "test:us001": "Executa testes da US001",
  "test:us002": "Executa testes da US002",
  "test:video": "Executa com gravação de vídeo",
  "test:no-video": "Executa sem gravação de vídeo"
}
```

---

## 🔧 Configurações

### Timeouts Aumentados

Para garantir estabilidade nos testes:

- **defaultCommandTimeout:** 15 segundos
- **pageLoadTimeout:** 60 segundos  
- **requestTimeout:** 15 segundos

### Retry Strategy

- **Modo CI/CD:** 2 tentativas em caso de falha
- **Modo Interativo:** 0 tentativas (para debug)

---

## 📸 Evidências

### Screenshots
Capturadas automaticamente em caso de falha dos testes.

### Vídeos
Gravação completa da execução disponível em `cypress/videos/`

---

## 🎓 Aprendizados

### Boas Práticas Aplicadas

✅ Page Object Model (POM)  
✅ Separação de dados de teste (fixtures)  
✅ Comandos reutilizáveis  
✅ CI/CD automatizado  
✅ Documentação completa  
✅ Versionamento adequado  

### Desafios Superados

- Identificação de bug crítico de segurança
- Implementação de validações complexas
- Configuração de pipeline CI/CD
- Documentação técnica profissional

---

## 👤 Autor

**Wisley Miguel**  
Estudante de Engenharia de Qualidade de Software - EBAC  

🐙 GitHub: [@Wisleymiguel](https://github.com/Wisleymiguel)

---

## 📄 Licença

Este projeto faz parte do Trabalho de Conclusão de Curso (TCC) da EBAC.  
Desenvolvido exclusivamente para fins educacionais.

---

## 🙏 Agradecimentos

- **Professor Fábio Araújo** - Orientação técnica
- **EBAC** - Plataforma de ensino
- **Comunidade Cypress** - Suporte e documentação

---

## 📚 Documentação Adicional

- [Documentação Completa US002](./README_US002.md)
- [Cypress Official Docs](https://docs.cypress.io)
- [EBAC Shop](https://lojaebac.ebaconline.art.br)
