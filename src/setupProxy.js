const { createProxyMiddleware } = require('http-proxy-middleware');

const api_url = process.env.API_URL || 'http://localhost:8080'

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            pathRewrite: {'^/api' : ''},
            target: api_url,
            changeOrigin: true,
        })
    );
};
