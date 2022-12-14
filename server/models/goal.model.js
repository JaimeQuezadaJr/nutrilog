const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema (
    {
        maxDailyCalories: {
            type: Number,
            required: [true, 'Please enter desired max daily calories']
        },
        foodTime: {
            type: String,
            required: [true, 'Please enter breakfast, lunch or dinner']
        },
        foodType: {
            type: String,
            required: [true, 'Please enter food type']
        },
        foodQuantity: {
            type: Number,
            required: [true, 'Please enter food amount']
        },
        waterIntake: {
            type: Number,
            required: [true, 'Please enter water amount']
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

const Goal = mongoose.model('goal', GoalSchema);
module.exports = Goal;