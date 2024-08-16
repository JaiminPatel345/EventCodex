
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    university: String,
    college: String,
    leetcodeUrl: String,
    codechefUrl: String,
    codeforcesUrl: String,
    atcoderUrl: String,
    hackerrankUrl: String,
    hackerearthUrl: String,
    codeninjaUrl: String,

});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
export default User;
