const router = require("express").Router();

const validarUrl = require('./middlewares/validarUrl');
const schemaUrl = require('./schemas/schemaUrl');
const { download } = require('./controllers/urlController');

router.get('/download', validarUrl(schemaUrl), download);

module.exports = router;