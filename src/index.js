const express = require('express')

const app = express()

const validarUrl = require('./middlewares/validarUrl');
const schemaUrl = require('./schemas/schemaUrl');
const { download } = require('./controllers/urlController');

app.use(express.json());

app.get('/download', validarUrl(schemaUrl), download);

app.listen(process.env.PORT);