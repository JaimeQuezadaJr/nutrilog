const mongoose = require('mongoose');

const NutritionSchema = mongoose.Schema(
    {
        foodTitle: {
            type: String,
            required: [true, 'Please enter food name'],
        },
        portionSize: {
            type: Number,
            required: [true, 'Please enter portion amount']
        },
        calories: {
            type: Number,
            required: [true, 'Please enter food calories'],
            
        },
        water: {
            type: Number,
            required: [true, 'Please enter water amount'],
            
        },
        protein: {
            type: Number,
            required: [true, 'Please enter protein amount']
        },
        totalFat: {
            type: Number,
            required: [true, 'Please enter total fat amount']
        },
        carbohydrates: {
            type: Number,
            required: [true, 'Please enter carbohydrates amount']
        },
        
        dietaryFiber: {
            type: Number,
            required: [true, 'Please enter total fiber amount']
        },
        calcium: {
            type: Number,
            required: [true, 'Please enter calcium amount']
        },
        iron: {
            type: Number,
            required: [true, 'Please enter iron amount']
        },
        magnesium: {
            type: Number,
            required: [true, 'Please enter magnesium amount']
        },
        phosphorus: {
            type: Number,
            required: [true, 'Please enter phosphorus amount']
        },
        potassium: {
            type: Number,
            required: [true, 'Please enter potassium amount']
        },
        sodium: {
            type: Number,
            required: [true, 'Please enter sodium amount']
        },
        zinc: {
            type: Number,
            required: [true, 'Please enter zinc amount']
        },
        copper: {
            type: Number,
            required: [true, 'Please enter copper amount']
        },
        selenium: {
            type: Number,
            required: [true, 'Please enter selenium amount']
        },
        vitaminA: {
            type: Number,
            required: [true, 'Please enter vitamin A amount']
        },
        vitaminE: {
            type: Number,
            required: [true, 'Please enter vitamin E amount']
        },
        vitaminD: {
            type: Number,
            required: [true, 'Please enter vitamin D amount']
        },
        vitaminC: {
            type: Number,
            required: [true, 'Please enter vitamin C amount']
        },
        thiamin: {
            type: Number,
            required: [true, 'Please enter thiamin amount']
        },
        riboflavin: {
            type: Number,
            required: [true, 'Please enter roboflavin amount']
        },
        niacin: {
            type: Number,
            required: [true, 'Please enter niacin amount']
        },
        vitaminB6: {
            type: Number,
            required: [true, 'Please enter vitamin B-6 amount']
        },
        vitaminB12: {
            type: Number,
            required: [true, 'Please enter vitamin B-12 amount']
        },
        choline: {
            type: Number,
            required: [true, 'Please enter choline amount']
        },
        vitaminK: {
            type: Number,
            required: [true, 'Please enter vitamin K amount']
        },
        folate: {
            type: Number,
            required: [true, 'Please enter folate amount']
        },
        // completedBy: {
        //     type: Date,
        //     required: [true, 'Please add goal completion date'],
        //     min: [Date.now, 'Please give yourself at least one day to complete the goal']
        // },
        // complete: {
        //     type: Boolean,
        //     default: false
        // },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Nutrition = mongoose.model('nutrition', NutritionSchema);
module.exports = Nutrition;