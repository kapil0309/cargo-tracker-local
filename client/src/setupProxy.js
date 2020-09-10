const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/cargobooking',
        createProxyMiddleware({
            target: 'https://cargo-booking-liberty-api-bluecargo-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/',
            changeOrigin: true,
        })
    ),  

    app.use(
        '/cargohandling',
        createProxyMiddleware({
            target: 'https://cargo-handling-liberty-api-bluecargo-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/',
            changeOrigin: true,
        })
    )
   
}


