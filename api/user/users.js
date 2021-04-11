const bcrypt = require('bcrypt');
const mongoose= require('mongoose');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
role: {
    type: String,
    enum: 'Admin',
    default: 'Admin'

},

password: {
    type: String,
    required: true
},
Store: {
    type: String,
    enum: [''],
    required: true
},

email: {
    type: String,
    required: true,
    unique: true
},

phone: {
    type: String
},

})

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) { return next() }

    this.password = this.encryptPassword(this.password);
    next();
});

UserSchema.methods = {
    authenticate: function (plainTextPword) {
        return bcrypt.compareSync(plainTextPword, this.password);
    },

    encryptPassword: function (plainTextPword) {
        if (!plainTextPword) {
            return ''
        } else {
            var salt = bcrypt.genSaltSync(12);
            return bcrypt.hashSync(plainTextPword, salt);
        }
    },

    toJson: function () {
        var obj = this.toObject()
        delete obj.password;
        return obj;
    }
};


module.exports = mongoose.model('user', UserSchema);


