const validarUrl = (schema) => async(req, res, next) => {
    try {

        await schema.validateAsync(req.query);
        
        next();
        
    } catch (error) {
        return res.status(400).json({ "mensagem": error.message });
    }
};

module.exports = validarUrl;