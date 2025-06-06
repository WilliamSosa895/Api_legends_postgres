const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/legends', controllers.createLegend);
router.get('/legends', controllers.getAllLegends);
router.get("/legends/:id", controllers.getLegendById);
router.put('/legends/:id', controllers.updateLegend);
router.patch('/legends/:id', controllers.updateLegend);  
router.delete('/legends/:id', controllers.deleteLegend);

module.exports = router;



/*const { Router } = require('express');

 const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
 router.post('/users', controllers.createUser);
 router.get('/users', controllers.getAllUsers);

module.exports = router;*/

