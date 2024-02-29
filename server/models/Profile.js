const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Pet = require('./Pet');

const profileSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: ""
        },
        myPets: [Pet.schema]

    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash new or updated user password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


// compare and validate password for login
profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

profileSchema.virtual('petCount').get(function () {
    return this.myPets.length;
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
