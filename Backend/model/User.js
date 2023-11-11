import { model, Schema } from "mongoose";

const UserSchema = new Schema ({
    userName: {type: String, required: true},
    customerName: {type: String, required: true},
    password: {type: String, required: true},
    gender: String,
    preferredCategory: String,
    createdAt: {type: Date, default: Date.now},
});

const User_Cred = model("User_Cred", UserSchema);

export default User_Cred;