const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRoutes= require('./dogRoutes');
const temperamentRoutes = require('./temperamentRoutes');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs',dogRoutes);
//router.use('/temperament', temperamentRoutes);

module.exports = router;


