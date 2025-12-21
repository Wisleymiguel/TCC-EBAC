const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    // ⚡ AUMENTA OS TIMEOUTS
    defaultCommandTimeout: 15000,  // 15 segundos (antes era 4)
    pageLoadTimeout: 60000,        // 60 segundos
    requestTimeout: 15000,         // 15 segundos
    
    // Vídeos e Screenshots
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    
    // ⚡ RETRY: Tenta de novo se falhar
    retries: {
      runMode: 2,      // Tenta 2x no CI/CD
      openMode: 0      // Não tenta de novo no modo interativo
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})