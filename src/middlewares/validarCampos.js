function validarCampos(camposRequeridos){
    return (req, res, next) => {
        const faltantes = camposRequeridos.filter(campo => !req.body[campo]);
        if (faltantes.length > 0) {
            return res.status(400).json({ error: `Faltan los campos: ${faltantes.join(', ')}` });
        }
        next();
    };
}