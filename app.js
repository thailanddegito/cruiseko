const express = require('express')
const next = require('next')
// const nextI18NextMiddleware = require('next-i18next/middleware').default
// const nextI18next = require('./utils/i18n')
const app = next({ dev: !!!process.env.NODE_ENV })
const handle = app.getRequestHandler()
const apiServer = require('./api-server/api')
// var mobile = require('is-mobile');
const port = process.env.PORT ||  3000 ;
const mode = process.env.NODE_ENV ? 'production' : 'development'


app.prepare().then(() => {
    const server = express()
    
    // server.use(nextI18NextMiddleware(nextI18next))
    server.use(express.static('static-server'))

    server.use('/api',apiServer)

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port} (${mode}) `)
    })
})