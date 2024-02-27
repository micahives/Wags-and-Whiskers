const { Schema, model } = require('mongoose');

const activitySchema = new Schema(
    {
        name: {
            type: String,
        },
        frequency: {
            type: String,
        },
        category: {
            type: String,
        },
        isComplete: {
            type: Boolean,
            default: false,
        },
        lastCompleted: {
            type: [Date],
        },
    },
);

const Activity = model('Activity', activitySchema);

module.exports = Activity