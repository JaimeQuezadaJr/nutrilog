const mongoose = require('mongoose');

const NutritionSchema = mongoose.Schema(
    {
        foodDescription: {
            type: String,
            required: [true, 'Goal is required'],
            minLength: [12, 'Goal description should be more than 12 characters long']
        },
        foodName: {
            type: String,
            required: [true, 'Please add food name'],
        },
        calories: {
            type: Number,
            required: [true, 'Please add food calories']
        },
        protein: {
            type: Number,
            required: [true, 'Please add protein amount']
        },
        totalFat: {
            type: Number,
            required: [true, 'Please enter total fat amount']
        },
        completedBy: {
            type: Date,
            required: [true, 'Please add goal completion date'],
            min: [Date.now, 'Please give yourself at least one day to complete the goal']
        },
        complete: {
            type: Boolean,
            default: false
        },
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