const NutritionController = require('../controllers/nutrition.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => { 
    app.get('/api/nutrition', NutritionController.findAllNutritions);
    app.get('/api/nutrition/user/:id', authenticate, NutritionController.findNutritionByUser); 
    app.get('/api/nutrition/:id', authenticate, NutritionController.findOneNutrition);
    app.post('/api/nutrition', authenticate, NutritionController.createNutrition);
    app.put('/api/nutrition/:id', authenticate, NutritionController.updateNutrition);
    app.delete('/api/nutrition/:id', authenticate, NutritionController.deleteNutrition); 
}