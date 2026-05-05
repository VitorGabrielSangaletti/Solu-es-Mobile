const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 1. ISSO RESOLVE O ERRO DE "Unable to resolve .wasm"
// Adiciona a extensão wasm para ser tratada como um asset
config.resolver.assetExts.push('wasm');

// 2. ISSO RESOLVE O PROBLEMA DE PERMISSÃO NO NAVEGADOR
// Mantém seus cabeçalhos de segurança (OPFS/SharedArrayBuffer)
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      return middleware(req, res, next);
    };
  },
};

module.exports = config;