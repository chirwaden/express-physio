import mongoose from 'mongoose'; 
import loadClass from 'mongoose-class-wrapper'; 
import bcrypt from 'bcrypt-nodejs';
 
var userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  hashedPassword: {type: String, required: true},
  salt: {type: String, required: true},
  created: {type: Date, default: Date.now}
});
 
class UserModel {
 
  get password() {
    return this._plainPassword;
  }

  set password(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  }
 
  encryptPassword(password) {
      const user = this,
        SALT_FACTOR = 5;

        if (!user.isModified('password')) return next();

        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
            if (err) return next(err);

            bcrypt.hash(password, salt, null, function(err, hash) {
            if (err) return next(err);
                password = hash;
            next();
            });
        });
  }
 
  static byEmail(email) {
    return this.findOne({email}).exec();
  }
 
}

userSchema.plugin(loadClass, UserModel);
 
export default mongoose.model('User', userSchema);