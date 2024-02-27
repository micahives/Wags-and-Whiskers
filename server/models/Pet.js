const { Schema, model } = require('mongoose');
const Activity = require('./Activity');

const petSchema = new Schema(
    {
        petName: {
            type: String,
            required: true,
        },
        isDog: {
            type: Boolean,
            required: true,
        },
        age: {
            type: Number,
            default: 3
        },
        weight: {
            type: Number,
        }, 
        image: {
            type: String,   
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        activities: [Activity.schema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// virtual property calculating what the pet's current age should be based on original input
// Takes the age entered when setting up the profile, and adds the difference (in weeks) between the current date and the CreatedAt date
petSchema.virtual('currentAge').get(function() {
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 100;
    const today = new Date();
    const createdAt = new Date(this.createdAt);

    const additionalWeeks = Math.floor((today - createdAt)/millisecondsInWeek);

    return this.age + additionalWeeks
});

const Pet = model('Pet', petSchema);

module.exports = Pet