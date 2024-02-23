const { Schema } = require('mongoose');

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

module.exports = activitySchema