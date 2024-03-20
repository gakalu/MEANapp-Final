const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  address: 
    {
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
  notes:[
    {
   date:{type:Date,required: true },
   header:{type:String,required: true },
   device:{type:String,required: true },
   details:{type:String,required: true }
    }  
  ]
});

const UserModel = mongoose.model("user", UserSchema);

class UserCollection {
  static async create(name, password, email, PhoneNumber, address,notes) {
    const user = new UserModel({ name, password, email, PhoneNumber, address,notes });
    await user.save();
    return user;
  }
  static async getUserByUsername(name) {
    const user = await UserModel.findOne({ name });
    return user;
  }
}

module.exports = UserCollection;
